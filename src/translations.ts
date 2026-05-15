export type Language = 'English' | 'Deutsch' | '日本語' | 'Français';

export const translations: Record<Language, any> = {
  English: {
    common: {
      network: 'Network',
      intelligence: 'Analysis',
      advisory: 'Advisory',
      institutional: 'About',
      liaison: 'Support',
      apply: 'Membership',
      return: 'Return to Homepage',
      back: 'Go Back',
      systems: 'Systems',
      architecture: 'Architecture',
      infrastructure: 'Infrastructure'
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
    features: {
      title: 'Strategic Foundations.',
      description: 'Our ecosystem is built on three core pillars: absolute transparency, biological precision, and global continuity.',
      p1_title: 'Sovereign Records',
      p1_desc: 'Your clinical data is removed from the public cloud and hosted within our private, hardware-locked repositories.',
      p2_title: 'Direct Liaison',
      p2_desc: 'Direct, 24/7 access to your clinical lead and analytical team. No intermediaries, no administrative delays.',
      p3_title: 'Global Flow',
      p3_desc: 'Consistent care standards across our international clinics, ensuring your protocol is followed wherever you reside.'
    },
    healthAi: {
      title: 'Clinical Intelligence.',
      description: 'We leverage advanced pattern recognition to identify biological deviations years before they manifest as clinical symptoms.',
      action: 'Run Intelligence Scan',
      analyzing: 'Processing Network Data...',
      result_headline: 'Analysis Complete.',
      placeholder: 'Describe your physiological status or current health inquiry for the clinical network...'
    },
    application: {
      successTitle: 'Inquiry Received.',
      successDesc: 'Thank you for your interest. Our membership team will review your profile and contact you if we are able to move forward with your request.',
      return: 'Return to start',
      label: 'Membership',
      title: 'Request Access.',
      description: 'Submit your profile for review. We maintain high service standards by selectively admitting new members to our global network.',
      name: 'Full Name',
      name_placeholder: 'First and Last Name',
      email: 'Email address',
      email_placeholder: 'name@example.com',
      bio: 'Objectives',
      bio_placeholder: 'Please describe your health objectives...',
      reference: 'Reference (Optional)',
      reference_placeholder: 'Who referred you?',
      submit: 'Submit Request',
      processing: 'Sending...'
    },
    support: {
      hero_title: 'Support Services.',
      hero_desc: 'Direct institutional support for current members and verified inquiries.',
      form_title: 'Institutional liaison.',
      form_desc: 'Direct institutional support for current members and verified inquiries. Our liaison officers are available for jurisdictional coordination and clinical data management assistance.'
    },
    membership: {
      hero_title: 'Membership.',
      hero_desc: 'Initiate your biological protocol. Access to the Medizer network is strictly managed to ensure institutional integrity.'
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
      advisory: 'Beratung',
      institutional: 'Über uns',
      liaison: 'Support',
      apply: 'Mitgliedschaft',
      return: 'Zur Startseite',
      back: 'Zurück',
      systems: 'Systeme',
      architecture: 'Architektur',
      infrastructure: 'Infrastruktur'
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
    features: {
      title: 'Strategische Grundlagen.',
      description: 'Unser Ökosystem basiert auf drei Kernsäulen: absolute Transparenz, biologische Präzision und globale Kontinuität.',
      p1_title: 'Souveräne Daten',
      p1_desc: 'Ihre klinischen Daten werden aus der öffentlichen Cloud entfernt und in unseren privaten, hardwaregesicherten Repositorys gehostet.',
      p2_title: 'Direkte Verbindung',
      p2_desc: 'Direkter 24/7-Zugang zu Ihrem klinischen Leiter und Analyseteam. Keine Vermittler, keine administrativen Verzögerungen.',
      p3_title: 'Globaler Fluss',
      p3_desc: 'Konsistente Versorgungsstandards in unseren internationalen Kliniken gewährleisten, dass Ihr Protokoll überall dort befolgt wird, wo Sie wohnen.'
    },
    healthAi: {
      title: 'Klinische Intelligenz.',
      description: 'Wir nutzen fortschrittliche Mustererkennung, um biologische Abweichungen Jahre vor ihrem klinischen Auftreten zu identifizieren.',
      action: 'Intelligenz-Scan ausführen',
      analyzing: 'Verarbeite Netzwerkdaten...',
      result_headline: 'Analyse abgeschlossen.',
      placeholder: 'Beschreiben Sie Ihren physiologischen Status oder Ihre aktuelle Gesundheitsanfrage für das klinische Netzwerk...'
    },
    application: {
      successTitle: 'Anfrage erhalten.',
      successDesc: 'Vielen Dank für Ihr Interesse. Unser Mitglieder-Team wird Ihr Profil prüfen und Sie kontaktieren, falls wir Ihre Anfrage weiter verfolgen können.',
      return: 'Zurück zum Start',
      label: 'Mitgliedschaft',
      title: 'Zugang anfordern.',
      description: 'Senden Sie Ihr Profil zur Prüfung ein. Wir halten hohe Servicestandards aufrecht, indem wir neue Mitglieder selektiv in unser globales Netzwerk aufnehmen.',
      name: 'Vollständiger Name',
      name_placeholder: 'Vor- und Nachname',
      email: 'E-Mail-Adresse',
      email_placeholder: 'name@beispiel.de',
      bio: 'Ziele',
      bio_placeholder: 'Bitte beschreiben Sie Ihre Gesundheitsziele...',
      reference: 'Referenz (Optional)',
      reference_placeholder: 'Wer hat Sie empfohlen?',
      submit: 'Anfrage absenden',
      processing: 'Wird gesendet...'
    },
    support: {
      hero_title: 'Support-Dienste.',
      hero_desc: 'Direkte institutionelle Unterstützung für aktuelle Mitglieder und verifizierte Anfragen.',
      form_title: 'Institutionelle Verbindung.',
      form_desc: 'Direkte institutionelle Unterstützung für aktuelle Mitglieder und verifizierte Anfragen. Unsere Verbindungsbeamten stehen für die Koordination der Zuständigkeiten und die Unterstützung beim Management klinischer Daten zur Verfügung.'
    },
    membership: {
      hero_title: 'Mitgliedschaft.',
      hero_desc: 'Initiieren Sie Ihr biologisches Protokoll. Der Zugang zum Medizer-Netzwerk wird streng verwaltet, um die institutionelle Integrität zu gewährleisten.'
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
      advisory: 'アドバイザリー',
      institutional: '伝統',
      liaison: 'サポート',
      apply: '会員登録',
      return: 'ホームに戻る',
      back: '戻る',
      systems: 'システム',
      architecture: '設計',
      infrastructure: '基盤'
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
    features: {
      title: '戦略的基盤',
      description: '私たちのエコシステムは、絶対的な透明性、生物学的精密、そしてグローバルな継続性という3つの主要な柱に基づいています。',
      p1_title: '主権的な記録',
      p1_desc: '臨床データはパブリッククラウドから削除され、プライベートなハードウェアロックされたリポジトリ内にホストされます。',
      p2_title: '直接連携',
      p2_desc: '担当臨床医および分析チームへの直接の24時間365日のアクセス。仲介者なし、事務的な遅延なし。',
      p3_title: 'グローバルな展開',
      p3_desc: '国際的なクリニック全体で一貫したケア基準を維持し、お客様がどこに住んでいてもプロトコルが順守されるようにします。'
    },
    healthAi: {
      title: '臨床インテリジェンス',
      description: '高度なパターン認識を活用し、臨床的症状として現れる数年前に生物学的逸脱を特定します。',
      action: 'インテリジェンススキャンを実行',
      analyzing: 'ネットワークデータを処理中...',
      result_headline: '分析完了。',
      placeholder: '臨床ネットワークへの生理学的状態または現在の健康に関する問い合わせを記入してください...'
    },
    application: {
      successTitle: 'お問い合わせを受け付けました。',
      successDesc: 'ご関心をお寄せいただきありがとうございます。会員チームでお客様のプロフィールを確認し、進められる場合はご連絡いたします。',
      return: 'スタートに戻る',
      label: '会員登録',
      title: 'アクセスをリクエストする',
      description: '審査のためにプロフィールを送信してください。グローバルネットワークに新しいメンバーを厳選して受け入れることで、高いサービス基準を維持しています。',
      name: '氏名',
      name_placeholder: '姓・名',
      email: 'メールアドレス',
      email_placeholder: 'name@example.com',
      bio: '目的',
      bio_placeholder: '健康に関する目的を記入してください...',
      reference: '紹介者（任意）',
      reference_placeholder: '紹介者はどなたですか？',
      submit: 'リクエストを送信',
      processing: '送信中...'
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
      advisory: 'Advisaire',
      institutional: 'À propos',
      liaison: 'Support',
      apply: 'Adhésion',
      return: 'Retour à l\'accueil',
      back: 'Retour',
      systems: 'Systèmes',
      architecture: 'Architecture',
      infrastructure: 'Infrastructure'
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
    features: {
      title: 'Fondations stratégiques.',
      description: 'Notre écosystème repose sur trois piliers fondamentaux : transparence absolue, précision biologique et continuité mondiale.',
      p1_title: 'Dossiers souverains',
      p1_desc: 'Vos données cliniques sont supprimées du cloud public et hébergées dans nos dépôts privés verrouillés par le matériel.',
      p2_title: 'Liaison directe',
      p2_desc: 'Accès direct 24h/24 et 7j/7 à votre responsable clinique et à votre équipe d\'analyse. Pas d\'intermédiaires, pas de délais administratifs.',
      p3_title: 'Flux mondial',
      p3_desc: 'Des normes de soins cohérentes dans nos cliniques internationales, garantissant que votre protocole est suivi où que vous résidiez.'
    },
    healthAi: {
      title: 'Intelligence clinique.',
      description: 'Nous exploitons la reconnaissance de formes avancée pour identifier les écarts biologiques des années avant qu\'ils ne se manifestent par des symptômes cliniques.',
      action: 'Exécuter l\'analyse d\'intelligence',
      analyzing: 'Traitement des données du réseau...',
      result_headline: 'Analyse terminée.',
      placeholder: 'Décrivez votre état physiologique ou votre demande de santé actuelle pour le réseau clinique...'
    },
    application: {
      successTitle: 'Demande reçue.',
      successDesc: 'Merci de votre intérêt. Notre équipe d\'adhésion examinera votre profil et vous contactera si nous sommes en mesure de donner suite à votre demande.',
      return: 'Retour au début',
      label: 'Adhésion',
      title: 'Demander l\'accès.',
      description: 'Soumettez votre profil pour examen. Nous maintenons des normes de service élevées en admettant sélectivement de nouveaux membres dans notre réseau mondial.',
      name: 'Nom complet',
      name_placeholder: 'Prénom et Nom',
      email: 'Adresse e-mail',
      email_placeholder: 'nom@exemple.fr',
      bio: 'Objectifs',
      bio_placeholder: 'Veuillez décrire vos objectifs de santé...',
      reference: 'Référence (Optionnel)',
      reference_placeholder: 'Qui vous a parrainé ?',
      submit: 'Soumettre la demande',
      processing: 'Envoi en cours...'
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
