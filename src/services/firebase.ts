import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '@/firebase-applet-config.json';

let app;
try {
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
} catch (error) {
  console.error("Firebase initialization failed. Using mock/null services.", error);
  // We don't throw to prevent white screen, but exports below will be handled
}

export const db = app ? getFirestore(app, firebaseConfig?.firestoreDatabaseId) : null;
export const auth = app ? getAuth(app) : null;

export async function seedContent() {
  if (!db || !app) return;
  const { collection, getDocs, setDoc, doc } = await import('firebase/firestore');
  const snapshot = await getDocs(collection(db, 'search_index'));
  
  // Always ensure content is up to date during dev
  const data = [
    {
      title: 'Biological Philosophy',
      title_lower: 'biological philosophy',
      excerpt: 'Understanding health as a sovereign asset rather than a lottery.',
      url: '/heritage/ethos',
      category: 'page',
      tags: ['philosophy', 'health', 'sovereign', 'biology', 'ethos']
    },
    {
      title: 'Global Network Infrastructure',
      title_lower: 'global network infrastructure',
      excerpt: 'Our institutional-grade clinical facilities across the globe.',
      url: '/network/global',
      category: 'resource',
      tags: ['network', 'global', 'infrastructure', 'facilities']
    },
    {
      title: 'Bio-Monitoring',
      title_lower: 'bio-monitoring',
      excerpt: 'Analytical intelligence for biological data acquisition.',
      url: '/network/monitoring',
      category: 'service',
      tags: ['monitoring', 'biological', 'data', 'health']
    },
    {
      title: 'Ethics Protocol',
      title_lower: 'ethics protocol',
      excerpt: 'Sovereign individual rights and longitudinal integrity standards.',
      url: '/analysis/ethics',
      category: 'policy',
      tags: ['ethics', 'protocol', 'rights', 'privacy']
    },
    {
      title: 'Analytical Core',
      title_lower: 'analytical core',
      excerpt: 'Advanced biological intelligence and predictive modelling.',
      url: '/analysis/core',
      category: 'core',
      tags: ['ai', 'analysis', 'intelligence', 'core']
    },
    {
      title: 'Membership Application',
      title_lower: 'membership application',
      excerpt: 'The process for applying to the Medizer exclusive membership.',
      url: '/membership',
      category: 'page',
      tags: ['apply', 'membership', 'access', 'application']
    },
    {
      title: 'Historical Legacy',
      title_lower: 'historical legacy',
      excerpt: 'Medizer founded in 1926 as a private health consultancy.',
      url: '/heritage/review',
      category: 'article',
      tags: ['history', 'legacy', '1926', 'founding', 'century']
    }
  ];

  // We check if all docs have the new searchKeywords field
  const needsSeeding = snapshot.empty || !snapshot.docs.every(d => d.data().searchKeywords);

  if (needsSeeding) {
    if (!auth || !auth.currentUser) {
      console.log("Seeding requires admin authentication. Please sign in if you are the developer.");
      // We don't force popup here to avoid blocking users, but we log the requirement
      return;
    }

    try {
      for (const item of data) {
        const id = item.title.toLowerCase().replace(/\s+/g, '-');
        const titleWords = item.title.toLowerCase().split(/\s+/);
        const searchKeywords = [...new Set([...titleWords, ...item.tags])];
        
        await setDoc(doc(db, 'search_index', id), {
          ...item,
          searchKeywords
        });
      }
      console.log("Institutional search index successfully initialized.");
    } catch (e) {
      console.error("Critical: Failed to seed search index. Verification of admin credentials required.", e);
    }
  }
}

// connection test
async function testConnection() {
  if (!db) return;
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration or network.");
    }
  }
}
testConnection();
