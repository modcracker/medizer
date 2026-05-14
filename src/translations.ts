export type Language = 'English' | 'Deutsch' | '日本語' | 'Français';

export const translations: Record<Language, any> = {
  English: {
    common: {
      network: 'Network',
      intelligence: 'Analysis',
      institutional: 'About',
      liaison: 'Support',
      apply: 'Membership'
    },
    hero: {
      established: 'Established in 1926',
      title: 'Global healthcare for those who expect more.',
      description: 'Since 1926, we have provided world-class healthcare management and advanced clinical insights to the leaders, families, and organizations that shape the future.',
      consultation: 'Request Access',
      overview: 'Network Overview'
    },
    philosophy: {
      quote: '"Biology is an asset, not a lottery."',
      p1: "Healthcare shouldn't be a guessing game. We believe your health is your most valuable capital, and it deserves to be managed with the same precision as any other fundamental investment.",
      p2: "Most medicine is reactive—it waits for things to break. We flip the script, using deep biological insights to give you the clarity you need to master your own future.",
      entry: "Excellence starts here. We're here to help you build an unbreakable foundation."
    },
    application: {
      successTitle: 'Inquiry Received.',
      successDesc: 'Thank you for your interest. Our membership team will review your profile and contact you if we are able to move forward with your request.',
      return: 'Return to start',
      label: 'Membership',
      title: 'Request Access.',
      description: 'Submit your profile for review. We maintain high service standards by selectively admitting new members to our global network.',
      name: 'Full Name',
      email: 'Email',
      bio: 'Objectives',
      reference: 'Reference (Optional)',
      submit: 'Submit Request',
      processing: 'Authenticating...'
    },
    footer: {
      tagline: 'Strategic biological management and medical-grade diagnostics.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      governance: 'Protocol',
      rights: 'All rights reserved.',
      protection: 'Data Protection'
    }
  },
  Deutsch: {
    common: {
      network: 'Netzwerk',
      intelligence: 'Analyse',
      institutional: 'Über uns',
      liaison: 'Support',
      apply: 'Mitgliedschaft'
    },
    hero: {
      established: 'Gegründet 1926',
      title: 'Analytische Gesundheitsversorgung und private Netzwerke.',
      description: 'Die Medizer Corporation bietet biologische Überwachung und selektives Networking für qualifizierte Personen. Seit unserer Gründung legen wir Wert auf die Analyse von Gesundheitsdaten und Diskretion für unsere weltweiten Mitglieder.',
      consultation: 'Beratung anfordern',
      overview: 'Netzwerkübersicht'
    },
    philosophy: {
      quote: '"Gesundheit ist keine biologische Lotterie mehr. Sie ist ein privates Gut."',
      p1: 'In einer Ära der Massenmedizin sind die meisten Menschen lediglich Zuschauer ihrer eigenen biologischen Ergebnisse. Bei Medizer glauben wir, dass Ihre Biologie Ihr wertvollstes Gut ist.',
      p2: 'Das Medizer-Netzwerk bietet unseren Mitgliedern die Ressourcen für eine präzise Gesundheitsüberwachung.',
      entry: 'Eintritt wird durch Übereinstimmung mit unseren Grundprinzipien der datengesteuerten Langlebigkeit verdient.'
    },
    footer: {
      tagline: 'Strategisches biologisches Management und medizinische Diagnostik.',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      governance: 'Protokoll',
      rights: 'Alle Rechte vorbehalten.',
      protection: 'Datenschutz'
    }
  },
  日本語: {
    common: {
      network: 'ネットワーク',
      intelligence: '分析',
      institutional: '伝統',
      liaison: 'サポート',
      apply: '会員登録'
    },
    hero: {
      established: '1926年設立',
      title: '高度なヘルスケアネットワーク。',
      description: 'Medizer Corporationは、適格な個人向けに、機関レベルの生物学的モニタリングと選択的なネットワーキングを提供しています。設立以来、私たちは世界中の会員のために、縦断的な健康データの分析と慎重さを優先してきました。',
      consultation: 'コンサルタントを依頼する',
      overview: 'ネットワークの概要'
    },
    philosophy: {
      quote: '「健康はもはや生物学的な宝くじではありません。それは貴重な資産です。」',
      p1: '大量生産された薬の時代において、ほとんどの個人は自分自身の生物学的な結果の単なる傍観者にすぎません。Medizerでは、お客様の生物学が最も貴重な資産であると信じています。',
      p2: 'Medizerネットワークは、精密な健康管理を維持するために必要な分析能力とリソースを会員に提供します。',
      entry: 'エントリーは、データ主導の長寿という私たちの核となる原則との連携を通じて獲得されるものです。'
    },
    footer: {
      tagline: '戦略的な生物学的管理と医療グレードの診断。',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      governance: 'プロトコル',
      rights: '全著作権所有。',
      protection: 'データ保護'
    }
  },
  Français: {
    common: {
      network: 'Réseau',
      intelligence: 'Analyse',
      institutional: 'À propos',
      liaison: 'Support',
      apply: 'Adhésion'
    },
    hero: {
      established: 'Établi en 1926',
      title: 'Soins de santé avancés et réseaux privés.',
      description: 'Medizer Corporation fournit une surveillance biologique et un réseautage sélectif pour les personnes qualifiées. Depuis notre fondation, nous avons privilégié l\'analyse longitudinale des données de santé et la discrétion pour nos membres mondiaux.',
      consultation: 'Demander une consultation',
      overview: 'Aperçu du réseau'
    },
    philosophy: {
      quote: '"La santé n\'est plus une loterie biologique. C\'est un actif stratégique."',
      p1: 'À une époque de médecine de masse, la plupart des individus ne sont que des spectateurs de leurs propres résultats biologiques. Chez Medizer, nous pensons que votre biologie est votre atout le plus précieux.',
      p2: 'Le réseau Medizer fournit à ses membres la capacité analytique et les ressources nécessaires pour maintenir un suivi biologique précis.',
      entry: 'L\'entrée se mérite par l\'alignement avec nos principes fondamentaux de longévité basée sur les données.'
    },
    footer: {
      tagline: 'Gestion biologique stratégique et diagnostics de qualité médicale.',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      governance: 'Protocole',
      rights: 'Tous droits réservés.',
      protection: 'Protection des données'
    }
  }
};
