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
      infrastructure: 'Infrastructure',
      megamenu: {
        infra_title: 'Institutional Network',
        infra_desc: '"Institutional Geography and Systems Assurance."',
        global_title: 'Continental Reach',
        global_desc: 'Jurisdictional clinical presence across established global territories.',
        monitoring_title: 'Systems Oversight',
        monitoring_desc: 'Continuous administrative and clinical fidelity assurance protocols.',
        analysis_digital: 'Digital Analysis',
        analysis_review: 'Review Protocol',
        heritage_records: 'Institutional Records',
        heritage_board: 'Administrative Board',
        heritage_tag: 'Ensuring medical excellence for nearly a century.'
      }
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
      entry: "Excellence starts here. We're here to help you build an unbreakable foundation.",
      sovereignty_title: "Biological Sovereignty.",
      priority_label: "Priority",
      priority_desc: "\"Clinical outcomes are delivered without compromise or external influence.\"",
      privacy_label: "Absolute Privacy",
      privacy_desc: "\"The individual is the absolute sovereign of their biological data.\"",
      luxury_title: "Health is the ultimate",
      luxury_subtitle: "Quiet Luxury."
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
      successTitle: 'Transmission Received',
      successDesc: 'Your request has been received. Our liaison officers will review your profile and contact you within 48 hours.',
      return: 'Return to start',
      label: 'Membership',
      title: 'Apply for Access.',
      description: 'Submit your profile for review. We maintain high standards of service by selectively onboarding new members to our global network.',
      name: 'Full Name',
      name_placeholder: 'First and Last Name',
      email: 'Email Address',
      email_placeholder: 'name@example.com',
      bio: 'Objectives',
      bio_placeholder: 'Please describe your health objectives...',
      reference: 'Reference (Optional)',
      reference_placeholder: 'Who referred you?',
      submit: 'Submit Request',
      processing: 'Sending...',
      reviewText: 'All inquiries undergo clinical review.',
      systemError: 'System Error',
      systemErrorDesc: 'We encountered an issue processing your request. Please ensure you are connected to the network or try again later.'
    },
    support: {
      hero_title: 'Support Services.',
      hero_desc: 'Direct institutional support for current members and verified inquiries.',
      hero_badge: 'LIAISON / SUPPORT',
      form_title: 'Institutional liaison.',
      form_desc: 'Direct institutional support for current members and verified inquiries. Our liaison officers are available for jurisdictional coordination and clinical data management assistance.',
      name: 'Full Name',
      name_placeholder: 'Your name',
      email: 'Email Address',
      email_placeholder: 'name@example.com',
      subject: 'Subject',
      subject_placeholder: 'How can we help?',
      message: 'Message',
      message_placeholder: 'Details...',
      submit: 'Submit Message',
      processing: 'Sending...',
      successTitle: 'Transmission Received',
      successDesc: 'Your message has been received. We will respond within 24 hours.',
      anotherMessage: 'Send another message',
      contactTitle: 'Contact Node',
      comms: 'Communications',
      commsDesc: 'Direct encrypted channel via form response.',
      secureLine: 'Secure Line',
      hqNode: 'HQ Node'
    },
    membership: {
      hero_title: 'Membership.',
      hero_desc: 'Initiate your biological protocol. Access to the Medizer network is strictly managed to ensure institutional integrity.',
      hero_badge: 'SYSTEMS / ACCESS'
    },
    infrastructure: {
      title: 'Institutional Foundation.',
      subtitle: 'Systems Architecture',
      description: 'The Medizer infrastructure is a globally distributed network of clinical repositories and analytical nodes, designed for absolute data sovereignty and operational continuity.',
      precision_title: "Precision at Scale.",
      precision_desc: "Each facility is a purpose-built environment designed for absolute biological fidelity. We maintain direct control over every tier of our system—from the physical hardware to the regional clinical personnel—ensuring a seamless health trajectory for our members.",
      specs: [
        { label: 'Air Purity', desc: 'Surgical HEPA filtration standards.' },
        { label: 'Data Stewardship', desc: 'Tier-4 physical server residency.' },
        { label: 'Access Control', desc: 'Vascular biometric protocol.' },
        { label: 'Energy Security', desc: 'Redundant power with long-term fuel cells.' }
      ],
      registry_title: "Facility Registry.",
      registry_subtitle: "Global Operations Registry",
      table: {
        location: "Location",
        classification: "Classification",
        status: "Status",
        jurisdiction: "Jurisdiction"
      },
      closing_title: "Privacy through",
      closing_subtitle: "Physical Isolation.",
      closing_quote: "\"We achieve absolute security by removing clinical data from the cloud entirely. Your biological record resides within our walls, and nowhere else.\""
    },
    globalNetwork: {
      title: 'Regional Centers.',
      description: 'Medizer operates a network of high-security clinical environments. Each facility is equipped with proprietary diagnostic arrays and direct links to Geneva headquarters.',
      nodes: {
        geneva: { city: 'Geneva', title: 'Institutional Primary' },
        london: { city: 'London', title: 'Analytical Residency' },
        singapore: { city: 'Singapore', title: 'Clinical Node' },
        dubai: { city: 'Dubai', title: 'Medical Facility' }
      },
      stats: {
        security_class: 'Security Class',
        power_backup: 'Power Backup',
        air_filtration: 'Air Filtration',
        response_team: 'Response Team',
        compliant_title: 'Fortress Compliance.',
        compliant_desc: 'Every Medizer facility is built to institutional fortress standards. We do not rent space; we commission the architecture.',
        biometric: 'Biometric-only access for all clinical and analytical areas.',
        power_grids: 'Jurisdictionally isolated power grids and waste management.',
        shielded: 'Shielded construction to prevent electromagnetic data leakage.',
        inquiry_button: 'Inquiry into Regional Access'
      },
      geneva_desc: "The host of our primary clinical board and the central repository for the Global Registry.",
      specialization: "Specialization",
      specs_geneva: [
        "Institutional Data Archiving",
        "Clinical Ethics Oversight",
        "High-Value Lineage Management"
      ],
      singapore_desc: "Liaison center for localized clinical data residency in the Asian Pacific territories.",
      staff_count: "Staff Count",
      sovereignty: "Sovereignty",
      specialists: "Specialists",
      full_autonomy: "Full Autonomy",
      london_desc: "Dedicated facility for high-fidelity sequencing and biological synthesis protocols.",
      array_capacity: "Array Capacity",
      dubai_desc: "Rapid-response facility for localized metabolic monitoring and acute biological optimization.",
      response_time: "RESPONSE TIME: < 2H",
      protocol_title: "Jurisdictional Intelligence.",
      protocol_desc: "Our selection of global nodes is driven by a requirement for absolute clinical and legal sovereignty. Each facility operates as a sub-sovereign entity within its territory.",
      continuity_title: "Unified Directives.",
      continuity_desc: "Managing health as a strategic asset across diverse legal and clinical territories requires a unified institutional baseline.",
      principles: [
        { title: 'Jurisdictional Logic', desc: 'We operate with full physical residency, ensuring that member data remains within the legal boundaries of the local jurisdiction. This prevents cross-border data seizures.' },
        { title: 'Direct Institutional Management', desc: 'No sub-contracting. Every medical officer, technician, and security detail is a direct institutional employee, vetted for loyalty and clinical excellence.' },
        { title: 'Sovereign Physical Stack', desc: 'Total ownership of the physical stack. From the custom sequencing arrays to the storage cabinets, we avoid all third-party managed service dependencies.' },
        { title: 'Air-Gapped Data Pools', desc: 'Critical biological repositories are physically isolated from external network influences, requiring multi-signature on-site authorization for access.' }
      ]
    },
    monitoring: {
      title: 'Systems Monitoring.',
      subtitle: 'Active Protocols',
      description: 'Real-time telemetry from our global clinical network. Monitoring absolute biological latency and diagnostic throughput.',
      metrics: {
        latency: 'Biological Latency',
        integrity: 'Network Integrity',
        throughput: 'Clinical Throughput',
        security: 'Hardware Lock Status'
      },
      dashboard: {
        operational_mode: 'Operational Mode // Active',
        command_interface: 'Command Interface.',
        last_verification: 'Last Verification',
        residency: 'Data Residency',
        latency: 'Network Latency',
        encryption: 'Encryption Protocol',
        board: 'Board Verification',
        audit_cycle: 'The Institutional Audit Cycle.',
        request_audit: 'Request Institutional Audit',
        status_optimal: 'Optimal',
        status_continuous: 'Continuous',
        status_locked: 'Locked',
        status_verified: 'Verified'
      },
      integrity: {
        title: "Clinical Integrity.",
        desc: "Our monitoring protocols are designed to detect even the most minute biological deviations, ensuring that every clinical result remains immutable and sovereign.",
        directive_title: "Directive 1926-C: The Oversight Mandate",
        directive_desc: "Established during the 2022 board synthesis, Directive 1926-C mandates that all biological telemetry be audited in real-time by a tiered synthesis engine, with manual clinical board verification for any shift exceeding 0.04% variance."
      },
      log: {
        title: "Institutional Log",
        secured: "SECURED",
        footer: "This interface is for administrative observation only. All modifications require multi-signature clinical board consensus recorded in the Century Archive."
      }
    },
    intelligencePage: {
      title: 'Clinical Directives.',
      subtitle: 'Governance & Advisory',
      description: 'We translate biological complexity into definitive strategic intelligence. Our directives are governed by a multi-jurisdictional ethical framework.',
      board: {
        title: "The Advisory Board.",
        desc: "Direct access to our clinical board in Geneva. This secure link provides continuous synthesis of all institutional biological data streams."
      },
      modules_title: "Intelligence Modules.",
      modules_desc: "Focused clinical pathways for complex biological management.",
      modules: [
        { title: 'Genomic Integrity', desc: 'Continuous modeling of epigenetic behavior and transcription health.' },
        { title: 'Metabolic Oversight', desc: 'Precision assessment of cellular energy conversion and oxidative stress.' },
        { title: 'Neurological Guard', desc: 'Resilience monitoring for high-precision decision cycles.' },
        { title: 'Lineage Analysis', desc: 'Longitudinal health tracking for multi-generational capital.' }
      ]
    },
    heritage: {
      title: 'Clinical Heritage.',
      subtitle: 'Established 1926',
      description: 'Our longevity is measured not in years, but in the biological resilience of our families.',
      mandate_title: "The Geneva Mandate.",
      mandate_desc: "Founded as a private endocrinology laboratory in 1926, the Medizer core was built on one principle: absolute biological sovereignty.",
      ethos_title: "Institutional Ethos",
      ethos_quote: "\"We believe that reactive medicine is a strategic failure. True clinical excellence lies in predicting decay before it manifests.\"",
      ethos_desc: "Medizer operates as a clinical steward for those whose health is a critical asset. Our philosophy is rooted in the Swiss tradition of absolute privacy and clinical neutrality.",
      features: [
        { title: 'Offline Storage', desc: 'Your records exist only on our hardened physical machines. No residency in public systems.' },
        { title: 'Vascular Privacy', desc: 'Authentication layers built on irreversible physiological markers, ensuring data access is yours alone.' }
      ],
      milestones_title: "Milestones.",
      milestones: [
        { year: '1926', title: 'The Old Town Lab', desc: 'Dr. Lukas Medizer founds the first laboratory specializing in adrenal and metabolic health for industrial leaders.' },
        { year: '1968', title: 'Cryptography Shift', desc: 'Pioneering off-grid record encryption. The foundation of our modern security architecture.' },
        { year: '1994', title: 'Network Expansion', desc: 'The transition from a single Geneva laboratory to a decentralized network of high-security clinical facilities.' },
        { year: '2022', title: 'Clinical Analysis', desc: 'The integration of advanced computational analysis into our diagnostic protocols.' }
      ],
      governance_badge: "Institutional Governance",
      governance_title: "Administered by the",
      governance_subtitle: "Geneva Medical Board.",
      governance_quote: "\"Our board is comprised of leading clinical strategists, ensuring that Medizer remains the gold standard for health preservation.\"",
      stats: {
        privacy: "Privacy Audit",
        residency: "Data Residency",
        access: "Clinical Access"
      }
    },
    accessPortal: {
      title: 'Access Gateway.',
      subtitle: 'Institutional Security Access',
      description: 'This terminal is reserved for authenticated Medizer personnel and verified members. Please authenticate to proceed.',
      button: 'Enter Portal',
      status_authorized: 'Authorized',
      status_standby: 'Standby',
      privacy_title: "Institutional Privacy.",
      privacy_desc: "Advanced data encryption tunnel for all clinical records.",
      verified_title: "Verified Access.",
      verified_desc: "Multi-factor verification required for all board members.",
      confirmed: "Identity Confirmed",
      verification: "Identity Verification",
      connected: "Connected as",
      authenticate: "Please authenticate via the secure portal",
      authorized: "Directiva Access Granted",
      end_session: "End Session",
      link: "Institutional Link",
      core: "Geneva Core"
    },
    corePage: {
      title: 'The Core.',
      subtitle: 'Analytical Infrastructure',
      description: 'Deploying advanced biological intelligence and predictive modelling to transform raw data streams into institutional foresight.',
      sovereignty_title: "Computational Sovereignty.",
      sovereignty_desc: "The Medizer Core is not a single location, but a distributed intelligence network operating under a unified clinical mandate. We utilize custom-etched silicon to maintain absolute data integrity at the hardware level.",
      synthesis_title: "Synthesis Architecture.",
      synthesis_desc: "Our platform handles the non-linear complexity of biological systems through massive parallelization and high-fidelity modeling.",
      stats: {
        parallel: "Parallel Streams",
        velocity: "Audit Velocity",
        residency: "Data Residency",
        encryption: "Encryption Tier"
      },
      status_nominal: "Status // Nominal",
      hardware_tier: "Hardware Tier // Sovereign Silicon",
      uptime_val: "99.9997%",
      zero_val: "Zero",
      system_ready: "SYSTEM READY FOR INQUIRY",
      stack: {
        title: "The Hardware Stack.",
        desc: "To guarantee absolute data privacy, we avoid standard consumer hardware. Our \"Geneva Supernode\" utilizes proprietary M-Series processors designed for cold-state encryption and high-velocity biological modeling.",
        uptime: "Uptime Fidelity",
        dependencies: "Zero External Dependencies"
      },
      modules_title: "Clinical Synthesis Modules.",
      modules_desc: "The Core operates through three primary analytical domains, each governed by its own set of institutional protocols and ethical guardrails.",
      modules: [
        { title: 'Metabolic Synthesis', desc: 'Real-time monitoring of biochemical shifts to maintain peak physiological performance across all jurisdictional centers.', focus: 'Bio-Fidelity' },
        { title: 'Genomic Forecasting', desc: 'Longitudinal analysis of genetic footprints to preempt potential biological variances decades before clinical manifestation.', focus: 'Generational Capital' },
        { title: 'Neuro-Integrity', desc: 'High-resolution monitoring of cognitive and neurological fidelity to ensure long-term intellectual preservation.', focus: 'Cognitive Sovereignty' }
      ],
      features: [
        { title: 'Neural Synthesis', desc: 'Advanced pattern recognition engines optimized for longitudinal health trajectory mapping and anomaly detection.' },
        { title: 'Immutable Archives', desc: 'Every analytical derivative is cryptographically signed and archived in our sovereign vaults across three continents.' },
        { title: 'Real-time Telemetry', desc: 'Instant ingestion and processing of biometric streams, providing immediate clinical feedback for board review.' },
        { title: 'Protocol Guard', desc: 'Autonomous enforcement of institutional clinical guidelines, rejecting any logic that deviates from our ethical baseline.' }
      ],
      cta_title: "Experience the Forefront.",
      cta_desc: "Advanced analytical briefings are available for institutional partners and premium members.",
      cta_button: "Request System Briefing"
    },
    ethicsPage: {
      title: 'Ethics Protocol.',
      subtitle: 'Institutional Governance',
      description: 'Governing the acquisition and stewardship of biological intelligence through a framework of sovereign individual rights.',
      guardrails_title: "The Guardrails.",
      guardrails_desc: "The Medizer Ethics Protocol is backed by technical countermeasures that prevent the violation of our core directives. Our silicon-level security ensures that these rules are immutable.",
      guardrails: [
        { title: 'Absolute Non-Commerciality', desc: 'At no point, for any reason, is member biological data ever provided to third-party commercial interests. Our revenue is derived from membership, not data arbitrage.' },
        { title: 'Mandatory Disclosure', desc: 'Any shift in the analytical baseline or synthesis logic is disclosed to the membership board 90 days prior to activation.' },
        { title: 'Biological Sanctity', desc: 'No biological data is used for speculative "enhancement" modeling without the explicit, jurisdictional consent of the individual member.' },
        { title: 'The Perpetual Archive', desc: 'Members have the right to migrate their data to secondary cold-storage tiers beyond our active synthesis environment at any time.' }
      ],
      governance_title: "Institutional Oversight Tiers.",
      governance_desc: "Transparency is maintained through a three-tier governance model, separating clinical operations from ethical adjudication.",
      enforced_constraints: "Enforced Constraints",
      tiers: [
        { tier: 'Tier 1 // Institutional Board', role: 'Direct oversight of day-to-day clinical operations and global synthesis fidelity.', comp: 'Internal Senior Clinicians' },
        { tier: 'Tier 2 // The Council of Directives', role: 'High-level auditing of the core protocols and long-term ethical trajectory.', comp: 'Bio-ethicists & Legal Scholars' },
        { tier: 'Tier 3 // Independent Tribunal', role: 'External adjudication of membership rights and jurisdictional compliance disputes.', comp: 'Independent 3rd Party Observers' }
      ],
      verification_title: "Institutional Verification.",
      verification_desc: "Medizer operates under strict bio-ethical frameworks established at our Geneva foundation. Our protocols are subject to bi-annual review by independent scholars.",
      audit_report: "Ethical Audit Report 2024.pdf",
      manifesto: "Transparency Manifesto",
      council_title: "The Council of Directives.",
      council_desc: "Our Council ensures that the institution remains faithful to its founding mandate while adapting to emergent biological technologies.",
      request_review: "Request Institutional Review"
    },
    directives: {
      title: 'Directives.',
      subtitle: 'Mandate & Core',
      description: 'Institutional guidelines ensuring the perpetuation of high-fidelity biological data and member security across the next century.',
      items: [
        { id: '01', title: 'Preservation of Lineage', desc: 'We prioritize the longitudinal tracking of biological markers across decades, ensuring health trajectories are analyzed within their complete historical context.' },
        { id: '02', title: 'Analytical Autonomy', desc: 'Medizer reserves all rights to proprietary methodology development, resisting commercial pressure to commoditize individual health snapshots in favor of deep-structure analysis.' },
        { id: '03', title: 'Discreet Stewardship', desc: 'The network exists as a private utility. We maintain a zero-visibility policy for external queries regarding individual membership or data repositories.' }
      ],
      cta_title: 'Aligned with our mission?',
      cta_desc: 'Membership into the Medizer Network is by institutional invitation or qualified application review.',
      cta_button: 'Inquire for Access'
    },
    review: {
      title: 'Century Review.',
      subtitle: 'Retrospective & Archive',
      description: 'A chronological analysis of the Medizer impact on institutional health management and biological data integrity since 1926.',
      milestones: [
        { year: '1926', title: 'Foundation', desc: 'Established in Geneva as a private data repository for longitudinal research.' },
        { year: '1954', title: 'The Zurich Accord', desc: 'Codification of member privacy rights and data stewardship protocols.' },
        { year: '1982', title: 'Network Expansion', desc: 'Activation of secondary facilities in Singapore and New York.' },
        { year: '2008', title: 'Bio-Digital Shift', desc: 'Transition of all physical records to encrypted sovereign digital architecture.' },
        { year: '2024', title: 'Century Milestone', desc: 'Approaching 100 years of uninterrupted biological data preservation.' }
      ],
      footer_tag: 'The Future of Sovereignty',
      footer_title: 'Secure your lineage today.',
      footer_button: 'Inquire for Access'
    },
    board: {
      title: 'Medical Board',
      subtitle: 'Institutional Governance',
      description: 'The Medizer Administrative Board consists of seven permanent members and four rotating clinical scholars, ensuring balanced ethical and scientific oversight.',
      mandate_title: 'The Core Mandate',
      mandate_desc: 'The board operates under a direct mandate to preserve the biological fidelity of our member registry above all commercial or external academic interests.',
      members: [
        { name: 'Dr. Alistair Vance', role: 'Chief of Clinical Synthesis', bio: 'Former head of longitudinal genomics at the Zurich Institute.' },
        { name: 'Elena Moretti', role: 'Director of Ethical Oversight', bio: 'International law scholar specializing in biological data sovereignty.' },
        { name: 'Dr. Kenji Tanaka', role: 'Head of Global Network', bio: 'Architecture lead for Sovereign Node infrastructure across Asia.' }
      ],
      report_title: "Transparency Report 2024",
      report_desc: "Review our latest governance and compliance findings.",
      report_button: "Download PDF"
    },
    rights: {
      title: 'Privacy Rights',
      subtitle: 'Member Sovereignty',
      description: 'Your biological data is your most private asset. We guarantee its absolute isolation from external query through physical and cryptographic barriers.',
      principles: [
        { title: 'Absolute Anonymity', desc: 'Member identities are decoupled from biological telemetry at the hardware level.' },
        { title: 'Zero Query Policy', desc: 'We do not respond to external data requests, regardless of jurisdiction, unless specifically authorized by the member.' },
        { title: 'Right to Deletion', desc: 'Physical and digital records are completely purged upon verified member request.' }
      ],
      terms_title: "Institutional Terms.",
      terms_desc: "Access to the Medizer network is a privilege governed by strict institutional protocols. By maintaining a protocol with us, you agree to our jurisdictional clinical standards and data stewardship mandates."
    },
    footer: {
      tagline: 'Strategic biological management and medical-grade diagnostics.',
      privacy: 'Privacy Rights',
      terms: 'Institutional Terms',
      governance: 'Protocol',
      systems: 'Systems',
      advisory: 'Advisory',
      about: 'About',
      operations: 'Operations',
      rights: 'All rights reserved.',
      protection: 'Data Protection',
      cta_title: 'Ready to join?',
      cta_desc: "Access the world's most advanced medical network.",
      cta_button: 'Get started',
      headquarters: 'Institutional Headquarters',
      address: 'Route de Pré-Bois 20, ICC / 1215 Geneva, Switzerland',
      identity_verified: 'Identity Verified',
      access_protocol: 'Access Protocol',
      access_required: 'Access Required'
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
      infrastructure: 'Infrastruktur',
      megamenu: {
        infra_title: 'Institutionelles Netzwerk',
        infra_desc: '"Institutionelle Geographie und Systemabsicherung."',
        global_title: 'Kontinentale Reichweite',
        global_desc: 'Jurisdiktionelle klinische Präsenz in etablierten globalen Gebieten.',
        monitoring_title: 'Systemüberwachung',
        monitoring_desc: 'Kontinuierliche administrative und klinische Treue-Sicherungsprotokolle.',
        analysis_digital: 'Digitale Analyse',
        analysis_review: 'Prüfungsprotokoll',
        heritage_records: 'Institutionelle Aufzeichnungen',
        heritage_board: 'Verwaltungsausschuss',
        heritage_tag: 'Sicherstellung medizinischer Exzellenz seit fast einem Jahrhundert.'
      }
    },
    hero: {
      established: 'Gegründet 1926',
      title: 'Analytische Gesundheitsversorgung und private Netzwerke.',
      description: 'Die Medizer Corporation bietet biologische Überwachung und selektives Networking für qualifizierte Personen. Seit unserer Gründung legen wir Wert auf die Analyse von Gesundheitsdaten und Diskretion für unsere weltweiten Mitglieder.',
      consultation: 'Beratung anfordern',
      overview: 'Netzwerkübersicht'
    },
    philosophy: {
      quote: '"Biologie ist ein Aktivposten, keine Lotterie."',
      p1: "Gesundheitsvorsorge sollte kein Ratespiel sein. Wir glauben, dass Ihre Gesundheit Ihr wertvollstes Kapital ist und es verdient, mit der gleichen Präzision wie jede andere fundamentale Investition verwaltet zu werden.",
      p2: "Die meiste Medizin ist reaktiv – sie wartet darauf, dass Dinge kaputt gehen. Wir drehen den Spieß um und nutzen tiefe biologische Erkenntnisse, um Ihnen die Klarheit zu geben, die Sie benötigen, um Ihre eigene Zukunft zu meistern.",
      entry: "Exzellenz beginnt hier. Wir sind hier, um Ihnen zu helfen, ein unerschütterliches Fundament aufzubauen.",
      sovereignty_title: "Biologische Souveränität.",
      priority_label: "Priorität",
      priority_desc: "\"Klinische Ergebnisse werden ohne Kompromisse oder externen Einfluss geliefert.\"",
      privacy_label: "Absolute Privatsphäre",
      privacy_desc: "\"Das Individuum ist der absolute Souverän seiner biologischen Daten.\"",
      luxury_title: "Gesundheit ist der ultimative",
      luxury_subtitle: "Stille Luxus."
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
      successTitle: 'Übertragung empfangen',
      successDesc: 'Ihre Anfrage wurde empfangen. Unsere Verbindungsbeamten werden Ihr Profil prüfen und Sie innerhalb von 48 Stunden kontaktieren.',
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
      processing: 'Wird gesendet...',
      reviewText: 'Alle Anfragen werden einer klinischen Prüfung unterzogen.',
      systemError: 'Systemfehler',
      systemErrorDesc: 'Es ist ein Problem bei der Verarbeitung Ihrer Anfrage aufgetreten. Bitte stellen Sie sicher, dass Sie mit dem Netzwerk verbunden sind, oder versuchen Sie es später erneut.'
    },
    support: {
      hero_title: 'Support-Dienste.',
      hero_desc: 'Direkte institutionelle Unterstützung für aktuelle Mitglieder und verifizierte Anfragen.',
      form_title: 'Institutionelle Verbindung.',
      form_desc: 'Direkte institutionelle Unterstützung für aktuelle Mitglieder und verifizierte Anfragen. Unsere Verbindungsbeamten stehen für die Koordination der Zuständigkeiten und die Unterstützung beim Management klinischer Daten zur Verfügung.',
      name: 'Vollständiger Name',
      name_placeholder: 'Ihr Name',
      email: 'E-Mail-Adresse',
      email_placeholder: 'name@beispiel.de',
      subject: 'Betreff',
      subject_placeholder: 'Wie können wir helfen?',
      message: 'Nachricht',
      message_placeholder: 'Details...',
      submit: 'Nachricht absenden',
      processing: 'Wird gesendet...',
      successTitle: 'Übertragung empfangen',
      successDesc: 'Ihre Nachricht wurde empfangen. Wir werden innerhalb von 24 Stunden antworten.',
      anotherMessage: 'Weitere Nachricht senden',
      contactTitle: 'Kontaktknoten',
      comms: 'Kommunikation',
      commsDesc: 'Direkter verschlüsselter Kanal via Formularantwort.',
      secureLine: 'Sichere Leitung',
      hqNode: 'Hauptsitz-Knoten'
    },
    membership: {
      hero_title: 'Mitgliedschaft.',
      hero_desc: 'Initiieren Sie Ihr biologisches Protokoll. Der Zugang zum Medizer-Netzwerk wird streng verwaltet, um die institutionelle Integrität zu gewährleisten.',
      hero_badge: 'SYSTEME / ZUGANG'
    },
    infrastructure: {
      title: 'Institutionelles Fundament.',
      subtitle: 'Systemarchitektur',
      description: 'Die Medizer-Infrastruktur ist ein weltweit verteiltes Netzwerk klinischer Repositorys und analytischer Knoten, das auf absolute Datensouveränität und betriebliche Kontinuität ausgelegt ist.',
      precision_title: "Präzision im Maßstab.",
      precision_desc: "Jede Einrichtung ist eine zweckgebundene Umgebung, die für absolute biologische Treue ausgelegt ist. Wir behalten die direkte Kontrolle über jede Ebene unseres Systems – von der physischen Hardware bis zum regionalen klinischen Personal – und gewährleisten so einen nahtlosen Gesundheitsverlauf für unsere Mitglieder.",
      specs: [
        { label: 'Luftreinheit', desc: 'Chirurgische HEPA-Filtrationsstandards.' },
        { label: 'Datenverwaltung', desc: 'Tier-4 physische Serverresidenz.' },
        { label: 'Zugangskontrolle', desc: 'Vaskuläres biometrisches Protokoll.' },
        { label: 'Energiesicherheit', desc: 'Redundant power with long-term fuel cells.' }
      ],
      registry_title: "Einrichtungsregister.",
      registry_subtitle: "Globales Betriebsregister",
      table: {
        location: "Standort",
        classification: "Klassifizierung",
        status: "Status",
        jurisdiction: "Jurisdiktion"
      },
      closing_title: "Privatsphäre durch",
      closing_subtitle: "Physische Isolation.",
      closing_quote: "\"Wir erreichen absolute Sicherheit, indem wir klinische Daten vollständig aus der Cloud entfernen. Ihre biologischen Daten befinden sich innerhalb unserer Mauern und nirgendwo sonst.\""
    },
    globalNetwork: {
      title: 'Regionale Zentren.',
      description: 'Medizer betreibt ein Netzwerk von hochsicheren klinischen Umgebungen. Jede Einrichtung ist mit proprietären Diagnose-Arrays und direkten Verbindungen zum Hauptsitz in Genf ausgestattet.',
      nodes: {
        geneva: { city: 'Genf', title: 'Institutionelle Primärseite' },
        london: { city: 'London', title: 'Analytische Residenz' },
        singapore: { city: 'Singapur', title: 'Klinischer Knoten' },
        dubai: { city: 'Dubai', title: 'Medizinische Einrichtung' }
      },
      stats: {
        security_class: 'Sicherheitsklasse',
        power_backup: 'Strom-Backup',
        air_filtration: 'Luftfiltration',
        response_team: 'Reaktionsteam',
        compliant_title: 'Festungskonformität.',
        compliant_desc: 'Jede Medizer-Einrichtung ist nach institutionellen Festungsstandards gebaut. Wir mieten keine Räume; wir beauftragen die Architektur.',
        biometric: 'Biometrischer Zugang für alle klinischen und analytischen Bereiche.',
        power_grids: 'Jurisdiktionell isolierte Stromnetze und Abfallmanagement.',
        shielded: 'Abgeschirmte Konstruktion zur Vermeidung elektromagnetischer Datenlecks.',
        inquiry_button: 'Anfrage zum regionalen Zugang'
      },
      geneva_desc: 'Sitz unseres primären klinischen Vorstands und zentrales Repository für das globale Register.',
      specialization: 'Spezialisierung',
      specs_geneva: ['Institutionelle Datenarchivierung', 'Klinische Ethikaufsicht', 'Management hochwertiger Abstammungslinien'],
      singapore_desc: 'Verbindungszentrum für lokalisierte klinische Datenresidenz in den asiatisch-pazifischen Gebieten.',
      staff_count: 'Personalanzahl',
      sovereignty: 'Souveränität',
      specialists: 'Spezialisten',
      full_autonomy: 'Vollständige Autonomie',
      london_desc: 'Spezialisierte Einrichtung für High-Fidelity-Sequenzierung und biologische Syntheseprotokolle.',
      array_capacity: 'Array-Kapazität',
      dubai_desc: 'Schnellreaktionszentrum für lokalisiertes metabolisches Monitoring und akute biologische Optimierung.',
      response_time: 'REAKTIONSZEIT: < 2 Std.',
      protocol_title: 'Jurisdiktionelle Intelligenz.',
      protocol_desc: 'Unsere Auswahl globaler Knoten wird von der Anforderung an absolute klinische und rechtliche Souveränität bestimmt. Jede Einrichtung agiert als sub-souveräne Einheit innerhalb ihres Territoriums.',
      continuity_title: 'Einheitliche Richtlinien.',
      continuity_desc: 'Das Management von Gesundheit als strategischer Aktivposten über verschiedene rechtliche und klinische Territorien hinweg erfordert eine einheitliche institutionelle Basis.',
      principles: [
        { title: 'Jurisdiktionelle Logik', desc: 'Wir operieren mit vollständiger physischer Residenz und stellen sicher, dass die Daten der Mitglieder innerhalb der rechtlichen Grenzen der lokalen Jurisdiktion bleiben.' },
        { title: 'Direktes Management', desc: 'Kein Subcontracting. Jeder medizinische Offizier, Techniker und Sicherheitsmitarbeiter ist ein direkter Angestellter der Institution.' },
        { title: 'Souveräner Stack', desc: 'Vollständiges Eigentum am physischen Stack. Von den speziell angefertigten Sequenzier-Arrays bis zu den Aufbewahrungsschränken vermeiden wir alle Abhängigkeiten von Dritten.' },
        { title: 'Air-Gapped-Datenpools', desc: 'Kritische biologische Repositories sind physisch von externen Netzeinflüssen isoliert.' }
      ]
    },
    monitoring: {
      title: 'Systemüberwachung.',
      subtitle: 'Aktive Protokolle',
      description: 'Echtzeit-Telemetrie aus unserem globalen klinischen Netzwerk. Überwachung der absoluten biologischen Latenz und des diagnostischen Durchsatzes.',
      metrics: {
        latency: 'Biologische Latenz',
        integrity: 'Netzwerkintegrität',
        throughput: 'Klinischer Durchsatz',
        security: 'Hardware-Sperrstatus'
      },
      dashboard: {
        operational_mode: 'Betriebsmodus // Aktiv',
        command_interface: 'Befehlsschnittstelle.',
        last_verification: 'Letzte Verifizierung',
        residency: 'Datenresidenz',
        latency: 'Netzwerklatenz',
        encryption: 'Verschlüsselungsprotokoll',
        board: 'Vorstandsverifizierung',
        audit_cycle: 'Der institutionelle Audit-Zyklus.',
        request_audit: 'Institutionelles Audit anfordern',
        status_optimal: 'Optimal',
        status_continuous: 'Kontinuierlich',
        status_locked: 'Gesperrt',
        status_verified: 'Verifiziert'
      },
      integrity: {
        title: "Klinische Integrität.",
        desc: "Unsere Überwachungsprotokolle sind darauf ausgelegt, selbst kleinste biologische Abweichungen zu erkennen und sicherzustellen, dass jedes klinische Ergebnis unveränderlich und souverän bleibt.",
        directive_title: "Richtlinie 1926-C: Das Aufsichtsmandat",
        directive_desc: "Die während der Vorstandssynthese 2022 festgelegte Richtlinie 1926-C schreibt vor, dass alle biologischen Telemetriedaten in Echtzeit von einer gestuften Synthese-Engine geprüft werden, wobei bei jeder Abweichung von mehr als 0,04 % eine manuelle Verifizierung durch den medizinischen Vorstand erfolgt."
      },
      log: {
        title: "Institutionelles Protokoll",
        secured: "GESICHERT",
        footer: "Diese Schnittstelle dient ausschließlich der administrativen Beobachtung. Alle Änderungen erfordern einen im Jahrhundertarchiv festgelegten Konsens des medizinischen Konsortiums mit mehreren Unterschriften."
      }
    },
    intelligencePage: {
      title: 'Klinische Richtlinien.',
      subtitle: 'Governance & Beratung',
      description: 'Wir übersetzen biologische Komplexität in definitive strategische Intelligenz. Unsere Richtlinien unterliegen einem multijurisdiktionellen ethischen Rahmen.',
      board: {
        title: "Der Beirat.",
        desc: "Direkter Zugang zu unserem klinischen Beirat in Genf. Diese sichere Verbindung bietet eine kontinuierliche Synthese aller institutionellen biologischen Datenströme."
      },
      modules_title: "Intelligenzmodule.",
      modules_desc: "Fokussierte klinische Pfade für komplexes biologisches Management.",
      modules: [
        { title: 'Genomische Integrität', desc: 'Kontinuierliche Modellierung des epigenetischen Verhaltens und der Transkriptionsgesundheit.' },
        { title: 'Metabolische Aufsicht', desc: 'Präzisionsbewertung der zellulären Energieumwandlung und des oxidativen Stresses.' },
        { title: 'Neurologischer Schutz', desc: 'Resilienz-Monitoring für hochpräzise Entscheidungszyklen.' },
        { title: 'Linienanalyse', desc: 'Langfristige Gesundheitsverfolgung für mehrgenerationale Kapital.' }
      ]
    },
    heritage: {
      title: 'Klinisches Erbe.',
      subtitle: 'Gegründet 1926',
      description: 'Unsere Langlebigkeit misst sich nicht in Jahren, sondern in der biologischen Widerstandsfähigkeit unserer Familien.',
      mandate_title: "Das Genfer Mandat.",
      mandate_desc: "Gegründet 1926 als privates endokrinologisches Labor, wurde der Medizer-Kern auf einem Prinzip aufgebaut: absolute biologische Souveränität.",
      ethos_title: "Institutionelles Ethos",
      ethos_quote: "\"Wir glauben, dass reaktive Medizin ein strategisches Versagen ist. Wahre klinische Exzellenz liegt darin, den Zerfall vorherzusagen, bevor er sich manifestiert.\"",
      ethos_desc: "Medizer agiert als klinischer Verwalter für diejenigen, deren Gesundheit ein kritisches Gut ist. Unsere Philosophie wurzelt in der Schweizer Tradition absoluter Privatsphäre und klinischer Neutralität.",
      features: [
        { title: 'Offline-Speicherung', desc: 'Ihre Daten existieren nur auf unseren gehärteten physischen Maschinen. Keine Residenz in öffentlichen Systemen.' },
        { title: 'Vaskuläre Privatsphäre', desc: 'Authentifizierungsschichten, die auf irreversiblen physiologischen Markern basieren und sicherstellen, dass der Datenzugriff nur Ihnen vorbehalten ist.' }
      ],
      milestones_title: "Meilensteine.",
      milestones: [
        { year: '1926', title: 'Das Altstadt-Labor', desc: 'Dr. Lukas Medizer gründet das erste Labor, das auf Nebennieren- und Stoffwechselgesundheit für Wirtschaftsführer spezialisiert ist.' },
        { year: '1968', title: 'Kryptographie-Wandel', desc: 'Pionierarbeit bei der netzunabhängigen Datenverschlüsselung. Das Fundament unserer modernen Sicherheitsarchitektur.' },
        { year: '1994', title: 'Netzwerkerweiterung', desc: 'Der Übergang von einem einzelnen Genfer Labor zu einem dezentralen Netzwerk von hochsicheren klinischen Einrichtungen.' },
        { year: '2022', title: 'Klinische Analyse', desc: 'Die Integration fortschrittlicher computergestützter Analysen in unsere Diagnoseprotokolle.' }
      ],
      governance_badge: "Institutionelle Governance",
      governance_title: "Verwaltet durch den",
      governance_subtitle: "Genfer Medizinerrat.",
      governance_quote: "\"Unser Vorstand besteht aus führenden klinischen Strategen, die sicherstellen, dass Medizer der Goldstandard für den Erhalt der Gesundheit bleibt.\"",
      stats: {
        privacy: "Datenschutzaudit",
        residency: "Datenresidenz",
        access: "Klinischer Zugang"
      }
    },
    accessPortal: {
      title: 'Zugangs-Gateway.',
      subtitle: 'Institutioneller Sicherheitszugang',
      description: 'Dieses terminal ist für authentifiziertes Medizer-Personal und verifizierte Mitglieder reserviert. Bitte authentifizieren Sie sich, um fortzufahren.',
      button: 'Portal betreten',
      status_authorized: 'Autorisiert',
      status_standby: 'Standby',
      privacy_title: "Institutionelle Privatsphäre.",
      privacy_desc: "Fortgeschrittener Datenverschlüsselungstunnel für alle klinischen Aufzeichnungen.",
      verified_title: "Verifizierter Zugang.",
      verified_desc: "Multi-Faktor-Verifizierung für alle Vorstandsmitglieder erforderlich.",
      confirmed: "Identität bestätigt",
      verification: "Identitätsprüfung",
      connected: "Verbunden als",
      authenticate: "Bitte authentifizieren Sie sich über das sichere Portal",
      authorized: "Directiva-Zugang gewährt",
      end_session: "Sitzung beenden",
      link: "Institutionelle Verbindung",
      core: "Genfer Kern"
    },
    corePage: {
      title: 'Der Kern.',
      subtitle: 'Analytische Infrastruktur',
      description: 'Einsatz fortschrittlicher biologischer Intelligenz und prädiktiver Modellierung, um Rohdatenströme in institutionelle Voraussicht zu verwandeln.',
      sovereignty_title: "Computersouveränität.",
      sovereignty_desc: "Der Medizer-Kern ist kein einzelner Standort, sondern ein verteiltes Intelligenznetzwerk, das unter einem einheitlichen klinischen Mandat arbeitet. Wir verwenden speziell geätztes Silizium, um die absolute Datentintegrität auf Hardwareebene zu gewährleisten.",
      synthesis_title: "Synthese-Architektur.",
      synthesis_desc: "Unsere Plattform bewältigt die nichtlineare Komplexität biologischer Systeme durch massive Parallelisierung und High-Fidelity-Modellierung.",
      stats: {
        parallel: "Parallele Ströme",
        velocity: "Audit-Geschwindigkeit",
        residency: "Datenresidenz",
        encryption: "Verschlüsselungsstufe"
      },
      status_nominal: "Status // Nominal",
      hardware_tier: "Hardware-Tier // Sovereign Silicon",
      uptime_val: "99.9997%",
      zero_val: "Null",
      system_ready: "SYSTEM BEREIT FÜR ANFRAGE",
      stack: {
        title: "Der Hardware-Stack.",
        desc: "Um absolute Dat Privatsphäre zu garantieren, vermeiden wir Standard-Hardware für Endverbraucher. Unser \"Geneva Supernode\" nutzt proprietäre M-Serie-Prozessoren für Cold-State-Verschlüsselung und biologische Modellierung mit hoher Geschwindigkeit.",
        uptime: "Uptime-Fidelity",
        dependencies: "Null externe Abhängigkeiten"
      },
      modules_title: "Klinische Synthesemodule.",
      modules_desc: "Der Kern arbeitet in drei primären analytischen Domänen, die jeweils von einem eigenen Satz institutioneller Protokolle und ethischer Leitplanken gesteuert werden.",
      modules: [
        { title: 'Metabolische Synthese', desc: 'Echtzeitüberwachung biochemischer Veränderungen zur Aufrechterhaltung der physiologischen Spitzenleistung in allen regionalen Zentren.', focus: 'Bio-Fidelity' },
        { title: 'Genomische Prognose', desc: 'Longitudinalanalyse genetischer Fußabdrücke zur Vorbeugung potenzieller biologischer Abweichungen Jahrzehnte vor der klinischen Manifestation.', focus: 'Generationskapital' },
        { title: 'Neuro-Integrität', desc: 'Hochauflösende Überwachung der kognitiven und neurologischen Treue zur Gewährleistung des langfristigen intellektuellen Erhalts.', focus: 'Kognitive Souveränität' }
      ],
      features: [
        { title: 'Neurale Synthese', desc: 'Fortschrittliche Mustererkennungs-Engines, optimiert für das Mapping longitudinaler Gesundheitsverläufe und die Anomalieerkennung.' },
        { title: 'Unveränderliche Archive', desc: 'Jedes analytische Derivat wird kryptografisch signiert und in unseren souveränen Tresoren auf drei Kontinenten archiviert.' },
        { title: 'Echtzeit-Telemetrie', desc: 'Sofortige Aufnahme und Verarbeitung biometrischer Ströme, die unmittelbares klinisches Feedback für die Überprüfung durch den Vorstand liefern.' },
        { title: 'Protokoll-Wächter', desc: 'Autonome Durchsetzung institutioneller klinischer Richtlinien, Ablehnung jeglicher Logik, die von unserer ethischen Basislinie abweicht.' }
      ],
      cta_title: "Erleben Sie die Vorreiterrolle.",
      cta_desc: "Fortgeschrittliche analytische Briefings sind für institutionelle Partner und Premium-Mitglieder verfügbar.",
      cta_button: "System-Briefing anfordern"
    },
    ethicsPage: {
      title: 'Ethik-Protokoll.',
      subtitle: 'Institutionelle Governance',
      description: 'Steuerung der Erfassung und Verwaltung biologischer Intelligenz durch einen Rahmen souveräner individueller Rechte.',
      guardrails_title: "Die Leitplanken.",
      guardrails_desc: "Das Medizer-Ethikprotokoll wird durch technische Gegenmaßnahmen unterstützt, die die Verletzung unserer Kernrichtlinien verhindern. Unsere Sicherheit auf Siliziumebene stellt sicher, dass diese Regeln unveränderlich sind.",
      guardrails: [
        { title: 'Absolute Nicht-Kommerzialität', desc: 'Zu keinem Zeitpunkt und aus keinem Grund werden biologische Daten von Mitgliedern jemals kommerziellen Interessen Dritter zur Verfügung gestellt. Unsere Einnahmen stammen aus Mitgliedschaften, nicht aus Datenarbitrage.' },
        { title: 'Verpflichtende Offenlegung', desc: 'Jede Änderung der analytischen Basis oder der Synthesehauptlogik wird dem Mitgliederrat 90 Tage vor der Aktivierung offengelegt.' },
        { title: 'Biologische Unantastbarkeit', desc: 'Ohne die ausdrückliche, jurisdiktionelle Zustimmung des einzelnen Mitglieds werden keine biologischen Daten für spekulative "Optimierungs"-Modellierungen verwendet.' },
        { title: 'Das ewige Archiv', desc: 'Mitglieder haben jederzeit das Recht, ihre Daten in sekundäre Cold-Storage-Ebenen außerhalb unserer aktiven Syntheseumgebung zu migrieren.' }
      ],
      governance_title: "Institutionelle Aufsichtsebenen.",
      governance_desc: "Transparenz wird durch ein dreistufiges Governance-Modell gewahrt, das den klinischen Betrieb von der ethischen Beurteilung trennt.",
      enforced_constraints: "Erzwungene Einschränkungen",
      tiers: [
        { tier: 'Ebene 1 // Institutioneller Vorstand', role: 'Direkte Aufsicht über den täglichen klinischen Betrieb und die globale Synthesetreue.', comp: 'Interne leitende Kliniker' },
        { tier: 'Ebene 2 // Der Rat der Richtlinien', role: 'Übergeordnete Prüfung der Kernprotokolle und der langfristigen ethischen Entwicklung.', comp: 'Bioethiker & Rechtsgelehrte' },
        { tier: 'Ebene 3 // Unabhängiges Tribunal', role: 'Externe Beurteilung von Mitgliedsrechten und Streitigkeiten über die Einhaltung von Zuständigkeiten.', comp: 'Unabhängige Drittbeobachter' }
      ],
      verification_title: "Institutionelle Verifizierung.",
      verification_desc: "Medizer arbeitet nach strengen bioethischen Rahmenbedingungen, die in unserem Genfer Fundament festgelegt wurden. Unsere Protokolle werden halbjährlich von unabhängigen Wissenschaftlern überprüft.",
      audit_report: "Ethischer Audit-Bericht 2024.pdf",
      manifesto: "Transparenz-Manifest",
      council_title: "Der Rat der Richtlinien.",
      council_desc: "Unser Rat stellt sicher, dass die Institution ihrem Gründungsauftrag treu bleibt, während sie sich an neue biologische Technologien anpasst.",
      request_review: "Institutionelle Überprüfung anfordern"
    },
    directives: {
      title: 'Direktiven.',
      subtitle: 'Mandate & Core',
      description: 'Institutionelle Richtlinien, die die Fortführung hochpräziser biologischer Daten und die Sicherheit der Mitglieder über das nächste Jahrhundert hinweg gewährleisten.',
      items: [
        { id: '01', title: 'Bewahrung der Abstammung', desc: 'Wir priorisieren die longitudine Verfolgung biologischer Marker über Jahrzehnte hinweg und stellen sicher, dass Gesundheitsverläufe in ihrem vollständigen historischen Kontext analysiert werden.' },
        { id: '02', title: 'Analytische Autonomie', desc: 'Medizer behält sich alle Rechte an der Entwicklung proprietärer Methoden vor und widersteht kommerziellem Druck, individuelle Gesundheits-Snapshots zugunsten von Tiefenstrukturanalysen zu kommerzialisieren.' },
        { id: '03', title: 'Diskrete Verwaltung', desc: 'Das Netzwerk existiert als private Einrichtung. Wir verfolgen eine Zero-Visibility-Politik für externe Anfragen bezüglich einzelner Mitgliedschaften oder Daten-Repositorys.' }
      ],
      cta_title: 'Im Einklang mit unserer Mission?',
      cta_desc: 'Die Mitgliedschaft im Medizer-Netzwerk erfolgt durch institutionelle Einladung oder qualifizierte Prüfung der Bewerbung.',
      cta_button: 'Zugang anfragen'
    },
    review: {
      title: 'Jahrhundert-Rückblick.',
      subtitle: 'Retrospektive & Archiv',
      description: 'Eine chronologische Analyse des Einflusses von Medizer auf das institutionelle Gesundheitsmanagement und die Integrität biologischer Daten seit 1926.',
      milestones: [
        { year: '1926', title: 'Gründung', desc: 'In Genf als privates Daten-Repository für Longitudinalforschung gegründet.' },
        { year: '1954', title: 'Das Zürcher Abkommen', desc: 'Kodifizierung der Datenschutzrechte der Mitglieder und der Protokolle zur Datenverwaltung.' },
        { year: '1982', title: 'Netzwerkausbau', desc: 'Aktivierung sekundärer Einrichtungen in Singapur und New York.' },
        { year: '2008', title: 'Bio-Digitaler Wandel', desc: 'Übergang aller physischen Aufzeichnungen in eine verschlüsselte, souveräne digitale Architektur.' },
        { year: '2024', title: 'Jahrhundert-Meilenstein', desc: 'Annäherung an 100 Jahre ununterbrochener Bewahrung biologischer Daten.' }
      ],
      footer_tag: 'Die Zukunft der Souveränität',
      footer_title: 'Sichern Sie noch heute Ihre Abstammung.',
      footer_button: 'Zugang anfragen'
    },
    board: {
      title: 'Medizinischer Rat',
      subtitle: 'Institutionelle Governance',
      description: 'Der Medizer-Verwaltungsrat besteht aus sieben ständigen Mitgliedern und vier rotierenden klinischen Gelehrten, was eine ausgewogene ethische und wissenschaftliche Aufsicht gewährleistet.',
      mandate_title: 'Das Kernmandat',
      mandate_desc: 'Der Rat handelt unter einem direkten Mandat, die biologische Treue unseres Mitgliederregisters vor allen kommerziellen oder externen akademischen Interessen zu bewahren.',
      members: [
        { name: 'Dr. Alistair Vance', role: 'Leiter der klinischen Synthese', bio: 'Ehemaliger Leiter der longitudinalen Genomik am Zürcher Institut.' },
        { name: 'Elena Moretti', role: 'Direktorin für ethische Aufsicht', bio: 'Gelehrte für internationales Recht, spezialisiert auf biologische Datensouveränität.' },
        { name: 'Dr. Kenji Tanaka', role: 'Leiter des globalen Netzwerks', bio: 'Architekturleiter für die Sovereign Node-Infrastruktur in ganz Asien.' }
      ],
      report_title: "Transparenzbericht 2024",
      report_desc: "Überprüfen Sie unsere neuesten Ergebnisse zu Governance und Compliance.",
      report_button: "PDF herunterladen"
    },
    rights: {
      title: 'Datenschutzrechte',
      subtitle: 'Mitgliedersouveränität',
      description: 'Ihre biologischen Daten sind Ihr privatestes Gut. Wir garantieren ihre absolute Isolierung von externen Abfragen durch physische und kryptografische Barrieren.',
      principles: [
        { title: 'Absolute Anonymität', desc: 'Mitgliederidentitäten werden auf Hardware-Ebene von der biologischen Telemetrie entkoppelt.' },
        { title: 'Zero-Query-Politik', desc: 'Wir antworten nicht auf externe Datenanfragen, unabhängig von der Gerichtsbarkeit, es sei denn, dies wurde vom Mitglied ausdrücklich genehmigt.' },
        { title: 'Recht auf Löschung', desc: 'Physische und digitale Aufzeichnungen werden auf verifizierte Anfrage des Mitglieds vollständig gelöscht.' }
      ]
    },
    footer: {
      tagline: 'Strategisches biologisches Management und medizinische Diagnostik.',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      governance: 'Protokoll',
      systems: 'Systeme',
      advisory: 'Beratung',
      about: 'Über uns',
      operations: 'Betrieb',
      rights: 'Alle Rechte vorbehalten.',
      protection: 'Datenschutz',
      cta_title: 'Bereit beizutreten?',
      cta_desc: 'Greifen Sie auf das fortschrittlichste medizinische Netzwerk der Welt zu.',
      cta_button: 'Jetzt starten',
      headquarters: 'Institutioneller Hauptsitz',
      address: 'Route de Pré-Bois 20, ICC / 1215 Genf, Schweiz',
      identity_verified: 'Identität verifiziert',
      access_protocol: 'Zugangsprotokoll',
      access_required: 'Zugang erforderlich'
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
      infrastructure: '基盤',
      megamenu: {
        infra_title: '組織的ネットワーク',
        infra_desc: '「組織的地理とシステム保証」',
        global_title: '大陸横断リーチ',
        global_desc: '確立されたグローバルな領土全体にわたる管轄区域の臨床プレゼンス',
        monitoring_title: 'システム監視',
        monitoring_desc: '継続的な管理的および臨床的忠実度保証プロトコル',
        analysis_digital: 'デジタル分析',
        analysis_review: 'レビュープロトコル',
        heritage_records: '組織的記録',
        heritage_board: '管理理事会',
        heritage_tag: 'ほぼ一世紀にわたり医学的卓越性を確保'
      }
    },
    hero: {
      established: '1926年設立',
      title: '高度なヘルスケアネットワーク。',
      description: 'Medizer Corporationは、適格な個人向けに、機関レベルの生物学的モニタリングと選択的なネットワークを提供しています。創設以来、世界中の会員に対して健康データの縦断的分析と機密性を優先してきました。',
      consultation: 'アクセスをリクエスト',
      overview: 'ネットワーク概要'
    },
    philosophy: {
      quote: '「健康はもはや生物学的な宝くじではありません。それは貴重な資産です。」',
      p1: '大量生産された薬の時代において、ほとんどの個人は自分自身の生物学的な結果の単なる傍観者にすぎません。Medizerでは、お客様の生物学が最も貴重な資産であると信じています。',
      p2: 'Medizerネットワークは、精密な健康管理を維持するために必要な分析能力とリソースを会員に提供します。',
      entry: 'エントリーは、データ主導の長寿という私たちの核となる原則との連携を通じて獲得されるものです。',
      sovereignty_title: "生物学的主権。",
      priority_label: "優先順位",
      priority_desc: "「臨床成果は、妥協や外部の影響を受けることなく提供されます。」",
      privacy_label: "絶対的なプライバシー",
      privacy_desc: "「個人は自分の生物学的データの絶対的な主権者です。」",
      luxury_title: "健康は究極の",
      luxury_subtitle: "クワイエット・ラグジュアリー。"
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
      successTitle: '送信完了',
      successDesc: 'リクエストを受け付けました。担当のリエゾン・オフィサーがプロフィールを審査し、48時間以内にご連絡いたします。',
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
      processing: '送信中...',
      reviewText: 'すべてのお問い合わせは臨床審査の対象となります。',
      systemError: 'システムエラー',
      systemErrorDesc: 'リクエストの処理中に問題が発生しました。ネットワークに接続されていることを確認するか、後でもう一度お試しください。'
    },
    support: {
      hero_title: 'サポートサービス',
      hero_desc: '現在のメンバーおよび確認済みの問い合わせに対する直接的な組織サポート',
      hero_badge: '連携 / サポート',
      form_title: '組織連携',
      form_desc: '現在のメンバーおよび確認済みの問い合わせに対する直接的な組織サポート。連携担当官が管轄区域の調整と臨床データ管理の支援に対応します。',
      name: '氏名',
      name_placeholder: 'お名前',
      email: 'メールアドレス',
      email_placeholder: 'name@example.com',
      subject: '件名',
      subject_placeholder: 'どのようなお手伝いが必要ですか？',
      message: 'メッセージ',
      message_placeholder: '詳細...',
      submit: 'メッセージを送信',
      processing: '送信中...',
      successTitle: '送信完了',
      successDesc: 'メッセージを受け付けました。24時間以内に回答いたします。',
      anotherMessage: '別のメッセージを送信',
      contactTitle: 'コンタクト ノード',
      comms: 'コミュニケーション',
      commsDesc: 'フォーム応答を介した直接暗号化チャネル。',
      secureLine: 'セキュア ライン',
      hqNode: '本部 ノード'
    },
    membership: {
      hero_title: '会員登録',
      hero_desc: '生物学的なプロトコルを開始します。Medizerネットワークへのアクセスは、組織の整合性を確保するために厳格に管理されています。',
      hero_badge: 'システム / アクセス'
    },
    infrastructure: {
      title: '組織的 基盤',
      subtitle: 'システム設計',
      description: 'Medizerのインフラストラクチャは、臨床リポジトリと分析ノードのグローバルに分散されたネットワークであり、絶対的なデータの主権と運用の継続性のために設計されています。',
      precision_title: "大規模な精度。",
      precision_desc: "各施設は、絶対的な生物学的忠実度のために設計された専用の環境です。物理ハードウェアから地域の臨床担当者に至るまで、システムのあらゆる層を直接制御し、メンバーにシームレスな健康軌道を保証します。",
      specs: [
        { label: '空気清浄度', desc: '外科用HEPAろ過基準。' },
        { label: 'データ管理', desc: 'ティア4物理サーバー常駐。' },
        { label: 'アクセス制御', desc: '血管生体認証プロトコル。' },
        { label: 'エネルギーセキュリティ', desc: '長期燃料電池による冗長電源。' }
      ],
      registry_title: "施設登録。",
      registry_subtitle: "グローバル運営登録",
      table: {
        location: "場所",
        classification: "分類",
        status: "ステータス",
        jurisdiction: "管轄区域"
      },
      closing_title: "物理的隔離による",
      closing_subtitle: "プライバシー。",
      closing_quote: "「クラウドから臨床データを完全に削除することで、絶対的なセキュリティを実現します。お客様の生物学的記録は私たちの壁の中にのみ存在し、他のどこにも存在しません。」"
    },
    globalNetwork: {
      title: '地域 センター',
      description: 'Medizerは、高セキュリティの臨床環境のネットワークを運営しています。各施設には独自の診断アレイが装備され、ジュネーブ本社と直接リンクしています。',
      nodes: {
        geneva: { city: 'ジュネーブ', title: '組織プライマリ' },
        london: { city: 'ロンドン', title: '分析レジデンス' },
        singapore: { city: 'シンガポール', title: '臨床ノード' },
        dubai: { city: 'ドバイ', title: '医療施設' }
      },
      stats: {
        security_class: 'セキュリティクラス',
        power_backup: '電源バックアップ',
        air_filtration: '空気ろ過',
        response_team: 'レスポンスチーム',
        compliant_title: '要塞コンプライアンス。',
        compliant_desc: 'すべてのMedizer施設は、組織の要塞基準に合わせて建設されています。スペースを借りるのではなく、建築を委託しています。',
        biometric: 'すべての臨床および分析エリアの生体認証のみのアクセス。',
        power_grids: '管轄区域ごとに隔離された電力網と廃棄物管理。',
        shielded: '電磁波データの漏洩を防ぐシールド構造。',
        inquiry_button: '地域アクセスのお問い合わせ'
      },
      geneva_desc: '当社の主要な臨床委員会の本拠地であり、グローバルレジストリの中心的なリポジトリです。',
      specialization: '専門分野',
      specs_geneva: ['組織データアーカイブ', '臨床倫理監督', '高価値系譜管理'],
      singapore_desc: 'アジア太平洋地域の地域的な臨床データ常駐のためのリエゾンセンター。',
      staff_count: '職員数',
      sovereignty: '主権',
      specialists: 'スペシャリスト',
      full_autonomy: '完全な自律性',
      london_desc: '高忠実度のシーケンスと生物学的合成プロトコルのための専用施設。',
      array_capacity: 'アレイ容量',
      dubai_desc: '地域的な代謝モニタリングと急性生物学的最適化のための迅速対応施設。',
      response_time: '対応時間: < 2時間',
      protocol_title: '管轄区域のインテリジェンス。',
      protocol_desc: 'グローバルノードの選択は、絶対的な臨床的および法的主権の要件によって推進されています。各施設は、その領土内で準主権的な実体として運営されています。',
      continuity_title: '統一された指令。',
      continuity_desc: '多様な法的および臨床的領域にわたる戦略的資産として健康を管理するには、統一された組織の基準値が必要です。',
      principles: [
        { title: '管轄の論理', desc: '完全な物理的滞在を伴って運営し、会員データが国内管轄の法的境界内に留まることを保証します。' },
        { title: '直接機関管理', desc: '下請けなし。すべての医療官、技術者、セキュリティ詳細は機関の直接雇用者です。' },
        { title: '主権的物理スタック', desc: '物理スタックの完全な所有権。サードパーティのマネージドサービスへの依存をすべて回避します。' },
        { title: 'エアギャップ・データプール', desc: '重要な生物学的リポジトリは、外部ネットワークの影響から物理的に隔離されています。' }
      ]
    },
    monitoring: {
      title: 'システム モニタリング',
      subtitle: 'アクティブプロトコル',
      description: 'グローバルな臨床ネットワークからのリアルタイムのテレメトリ。絶対的な生物学的レイテンシと診断スループットを監視します。',
      metrics: {
        latency: '生物学的レイテンシ',
        integrity: 'ネットワーク整合性',
        throughput: '臨床スループット',
        security: 'ハードウェアロック状態'
      },
      dashboard: {
        operational_mode: '動作モード // アクティブ',
        command_interface: 'コマンドインターフェース。',
        last_verification: '最終検証',
        residency: 'データレジデンシー',
        latency: 'ネットワークレイテンシ',
        encryption: '暗号化プロトコル',
        board: '理事会検証',
        audit_cycle: '組織監査サイクル。',
        request_audit: '組織監査をリクエスト',
        status_optimal: '最適',
        status_continuous: '継続的',
        status_locked: 'ロック中',
        status_verified: '検証済み'
      },
      integrity: {
        title: "臨床的完全性。",
        desc: "私たちの監視プロトコルは、極めて微細な生物学的逸脱さえも検出するように設計されており、すべての臨床結果が不変で主権的であることを保証します。",
        directive_title: "指令 1926-C: 監視マンデート",
        directive_desc: "2022年の理事会統合中に確立された指令1926-Cは、すべての生物学的テレメトリを階層型合成エンジンによってリアルタイムで監査することを義務付けており、0.04%を超える変動については臨床理事会による手動検証が必要です。"
      },
      log: {
        title: "組織ログ",
        secured: "セキュア",
        footer: "このインターフェースは管理上の観察専用です。すべての変更には、センチュリーアーカイブに記録された複数の署名による臨床理事会の合意が必要です。"
      }
    },
    intelligencePage: {
      title: '臨床指令',
      subtitle: 'ガバナンスとアドバイザリー',
      description: '生物学的な複雑さを決定的な戦略的インテリジェンスに変換します。私たちの指令は、複数の管轄区域にわたる倫理的枠組みによって管理されています。',
      board: {
        title: "諮問委員会。",
        desc: "ジュネーブの臨床委員会への直接アクセス。この安全なリンクは、すべての機関の生物学的データストリームの継続的な合成を提供します。"
      },
      modules_title: "インテリジェンスモジュール。",
      modules_desc: "複雑な生物学的管理のための焦点を絞った臨床パスウェイ。",
      modules: [
        { title: 'ゲノム完全性', desc: 'エピジェネティックな行動と転写の健康の継続的なモデリング。' },
        { title: '代謝監視', desc: '細胞エネルギー変換と酸化ストレスの精密評価。' },
        { title: '神経防衛', desc: '高精度な意思決定サイクルのためのレジリエンス・モニタリング。' },
        { title: '家系分析', desc: '多世代の資本のための長期的な健康追跡。' }
      ]
    },
    heritage: {
      title: '臨床の伝統。',
      subtitle: '1926年設立',
      description: '私たちの長寿は年数ではなく、家族の生物学的な回復力によって測られます。',
      mandate_title: "ジュネーブ指令。",
      mandate_desc: "1926年に私的な内分泌学研究所として設立されたメダイザーの核心は、絶対的な生物学的主権という一つの原則に基づいています。",
      ethos_title: "制度の精神",
      ethos_quote: "「私たちは、事後対応的な医学は戦略的な失敗であると考えています。真の臨床の卓越性は、症状が現れる前に衰退を予測することにあります。」",
      ethos_desc: "メダイザーは、健康が重要な資産である人々のための臨床管理者として活動しています。私たちの哲学は、絶対的なプライバシーと臨床的中立性というスイスの伝統に根ざしています。",
      features: [
        { title: 'オフラインストレージ', desc: 'あなたの記録は、私たちの強化された物理マシン上のみに存在します。パブリックシステムには存在しません。' },
        { title: '血管プライバシー', desc: '不可逆的な生理学的マーカーに基づいた認証レイヤーにより、データへのアクセスがあなただけのものであることが保証されます。' }
      ],
      milestones_title: "マイルストーン。",
      milestones: [
        { year: '1926', title: '旧市街の研究所', desc: 'ルーカス・メダイザー博士が、産業界のリーダー向けに副腎と代謝の健康を専門とする最初の研究所を設立しました。' },
        { year: '1968', title: '暗号化の転換', desc: 'オフグリッドの記録暗号化の先駆け。現代のセキュリティアーキテクチャの基盤。' },
        { year: '1994', title: 'ネットワークの拡大', desc: '単一のジュネーブ研究所から、高度なセキュリティを備えた臨床施設の分散ネットワークへの移行。' },
        { year: '2022', title: '臨床分析', desc: '診断プロトコルへの高度な計算分析の統合。' }
      ],
      governance_badge: "制度的ガバナンス",
      governance_title: "運営組織：",
      governance_subtitle: "ジュネーブ医学理事会",
      governance_quote: "「当理事会は一流の臨床戦略家で構成されており、メダイザーが健康維持のゴールドスタンダードであり続けることを保証しています。」",
      stats: {
        privacy: "プライバシー監査",
        residency: "データレジデンシー",
        access: "臨床アクセス"
      }
    },
    accessPortal: {
      title: 'アクセス ゲートウェイ',
      subtitle: '組織セキュリティアクセス',
      description: 'この端末は、認証されたMedizer職員および確認済みの会員専用です。続行するには認証してください。',
      button: 'ポータルに入る',
      status_authorized: '認証済み',
      status_standby: 'スタンバイ',
      privacy_title: "組織的プライバシー",
      privacy_desc: "すべての臨床記録のための高度なデータ暗号化トンネル",
      verified_title: "検証済みアクセス",
      verified_desc: "すべての理事会メンバーに必要な多要素認証",
      confirmed: "本人確認完了",
      verification: "本人確認",
      connected: "として接続中",
      authenticate: "セキュアポータル経由で認証してください",
      authorized: "指令アクセスが許可されました",
      end_session: "セッション終了",
      link: "組織的リンク",
      core: "ジュネーブ・コア"
    },
    corePage: {
      title: '分析コア',
      subtitle: '分析インフラストラクチャ',
      description: '高度な生物学的インテリジェンスと予測モデリングを展開し、生のデータストリームを組織的な洞察に変換します。',
      sovereignty_title: "計算上の主権。",
      sovereignty_desc: "メダイザー・コアは単一の場所ではなく、統合された臨床指令の下で動作する分散型インテリジェンス・ネットワークです。ハードウェアレベルで絶対的なデータの完全性を維持するために、カスタムエッチングされたシリコンを利用しています。",
      synthesis_title: "合成アーキテクチャ。",
      synthesis_desc: "当社のプラットフォームは、大規模な並列化と高忠実度モデリングを通じて、生物学的システムの非線形な複雑さを処理します。",
      stats: {
        parallel: "パラレルストリーム",
        velocity: "監査速度",
        residency: "データレジデンシー",
        encryption: "暗号化層"
      },
      status_nominal: "ステータス // 名目通り",
      hardware_tier: "ハードウェア層 // 主権シリコン",
      uptime_val: "99.9997%",
      zero_val: "ゼロ",
      system_ready: "システム照会準備完了",
      stack: {
        title: "ハードウェアスタック。",
        desc: "絶対的なデータプライバシーを保証するために、標準的な消費者向けハードウェアは避けています。当社の「ジュネーブ・スーパーノード」は、コールドステート暗号化と高速生物学的モデリング用に設計された独自のアセットシリコンを利用しています。",
        uptime: "稼働率の忠実度",
        dependencies: "外部依存関係ゼロ"
      },
      modules_title: "臨床合成モジュール。",
      modules_desc: "コアは3つの主要な分析ドメインを通じて動作し、それぞれが独自の機関プロトコルと倫理的ガードレールによって管理されています。",
      modules: [
        { title: '代謝合成', desc: 'すべての管轄センターで最高の生理学的パフォーマンスを維持するための生化学的変化のリアルタイムモニタリング。', focus: 'バイオフィデリティ' },
        { title: 'ゲノム予測', desc: '臨床症状が現れる数十年前に潜在的な生物学的変動を先取りするための遺伝的フットプリントの縦断的分析。', focus: '世代資本' },
        { title: '神経の完全性', desc: '長期的な知的保存を確実にするための認知および神経学的忠実度の高解像度モニタリング。', focus: '認知的主権' }
      ],
      features: [
        { title: 'ニューラル合成', desc: '縦断的な健康軌道のマッピングと異常検出に最適化された高度なパターン認識エンジン。' },
        { title: '不変のアーカイブ', desc: 'すべての分析派生物は暗号署名され、3つの大陸にある当社の主権的な金庫に保管されます。' },
        { title: 'リアルタイム・テレメトリ', desc: '生体ストリームの即時取り込みと処理により、理事会の審査のための即時の臨床フィードバックを提供します。' },
        { title: 'プロトコル・ガード', desc: '組織的な臨床ガイドラインの自律的な強制を行い、当社の倫理的ベースラインから逸脱する論理を排除します。' }
      ],
      cta_title: "最前線を体験する。",
      cta_desc: "高度な分析ブリーフィングは、機関パートナーおよびプレミアムメンバーが利用できます。",
      cta_button: "システムブリーフィングをリクエスト"
    },
    ethicsPage: {
      title: '倫理プロトコル',
      subtitle: '組織ガバナンス',
      description: '主権的な個人の権利の枠組みを通じて、生物学的インテリジェンスの取得と管理を統治します。',
      guardrails_title: "ガードレール。",
      guardrails_desc: "メダイザー倫理プロトコルは、当社の核となる指令への違反を防ぐための技術的な対策に裏打ちされています。シリコンレベルのセキュリティにより、これらのルールは不変です。",
      guardrails: [
        { title: '完全な非商業性', desc: 'いかなる時点でも、いかなる理由によっても、メンバーの生物学的データが第三者の商業的利益に提供されることはありません。当社の収益はデータ裁定取引ではなく、メンバーシップから得られます。' },
        { title: '強制的開示', desc: '分析ベースラインまたは合成ロジックの変更は、有効化の90日前にメンバーシップ理事会に開示されます。' },
        { title: '生物学的神聖性', desc: '個々のメンバーの明示的な管轄区域の同意なしに、生物学的データが投機的な「強化」モデリングに使用されることはありません。' },
        { title: '永久アーカイブ', desc: 'メンバーは、当社の能動的な合成環境を超えて、いつでもデータを二次コールドストレージ層に移行する権利を有します。' }
      ],
      governance_title: "機関監督の階層。",
      governance_desc: "透明性は3段階のガバナンスモデルを通じて維持され、臨床業務と倫理的裁定を分離しています。",
      enforced_constraints: "強制的な制約",
      tiers: [
        { tier: '第1層 // 機関理事会', role: '日々の臨床業務とグローバルな合成忠実度の直接監督。', comp: '内部シニア臨床医' },
        { tier: '第2層 // 指令評議会', role: 'コアプロトコルと長期的な倫理的軌跡の高レベルの監査。', comp: 'バイオエシシスト＆法学者' },
        { tier: '第3層 // 独立裁判所', role: 'メンバーシップの権利および管轄区域のコンプライアンス紛争の外部裁定。', comp: '独立した第三者オブザーバー' }
      ],
      verification_title: "組織的な検証。",
      verification_desc: "メダイザーは、ジュネーブの財団で確立された厳格な生物倫理の枠組みの下で運営されています。当社のプロトコルは、独立した学者によって年2回レビューされます。",
      audit_report: "2024年度倫理監査報告書.pdf",
      manifesto: "透明性マニフェスト",
      council_title: "指令評議会。",
      council_desc: "当評議会は、新しい生物学的技術に適応しながらも、組織が設立時の指令に忠実であり続けることを確実にします。",
      request_review: "組織的レビューをリクエスト"
    },
    directives: {
      title: '臨床 指令',
      subtitle: 'マンデートとコア',
      description: '高精度の生物学的データの永続性と、次の世紀に向けた会員のセキュリティを確保するための組織적ガイドライン。',
      items: [
        { id: '01', title: '系譜の保存', desc: '私たちは数十年間にわたる生物学的マーカーの長期的な追跡を優先し、健康の軌跡が完全な歴史的背景の中で分析されることを保証します。' },
        { id: '02', title: '分析の自律性', desc: 'Medizerは独自のメソッド開発に関するすべての権利を留保し、深い構造分析を優先して、個人の健康スナップショットを商品化しようとする商業的圧力に抵抗します。' },
        { id: '03', title: '控えめな管理', desc: 'ネットワークは私的なユーティリティとして存在します。私たちは、個々の会員やデータリポジトリに関する外部からの問い合わせに対して、ゼロ・ビジビリティ・ポリシーを維持します。' }
      ],
      cta_title: '私たちの使命に共感しますか？',
      cta_desc: 'Medizerネットワークへの入会は、組織的な招待または資格のある申し込み審査によって行われます。',
      cta_button: 'アクセスのお問い合わせ'
    },
    review: {
      title: '1世紀の レビュー',
      subtitle: '回顧とアーカイブ',
      description: '1926年以来、組織的な健康管理と生物学的データの整合性に対するMedizerの影響を時系列で分析します。',
      milestones: [
        { year: '1926', title: '設立', desc: '長期研究のための私的なデータリポジトリとしてジュネーブに設立。' },
        { year: '1954', title: 'チューリッヒ協定', desc: '会員のプライバシー権とデータの管理プロトコルの成文化。' },
        { year: '1982', title: 'ネットワークの拡大', desc: 'シンガポールとニューヨークに二次施設を設置。' },
        { year: '2008', title: 'バイオ・デジタルの転換', desc: 'すべての物理的記録を暗号化された主権的なデジタルアーキテクチャに移行。' },
        { year: '2024', title: '世紀の節目', desc: '100年にわたる途切れることのない生物学的データの保存を達成。' }
      ],
      footer_tag: '主権の未来',
      footer_title: '今日からあなたの系譜を守りましょう。',
      footer_button: 'アクセスのお問い合わせ'
    },
    board: {
      title: '医療 理事会',
      subtitle: '組織ガバナンス',
      description: 'Medizer管理理事会は、7人の常任理事と4人の交代制の臨床学者で構成され、バランスの取れた倫理的および科学的な監視を確実にしています。',
      mandate_title: 'コア・マンデート',
      mandate_desc: '理事会は、あらゆる商業的または外部のアカデミックな利益よりも、会員登録簿の生物学的な忠実度を維持するという直接的な指令の下で運営されています。',
      members: [
        { name: 'アリスター・ヴァンス博士', role: '臨床統合責任者', bio: 'チューリッヒ研究所の長期ゲノミクスの元責任者。' },
        { name: 'エレナ・モレッティ', role: '倫理監督ディレクター', bio: '生物学的データの主権を専門とする国際法の学者。' },
        { name: '田中 健司 博士', role: 'グローバルネットワーク責任者', bio: 'アジア全域の主権ノードインフラストラクチャの建築リード。' }
      ],
      report_title: "透明性レポート 2024",
      report_desc: "最新のガバナンスとコンプライアンスの結果を確認してください。",
      report_button: "PDFをダウンロード"
    },
    rights: {
      title: 'プライバシー 権',
      subtitle: '会員の主権',
      description: 'あなたの生物学的データは、あなたの最も個人的な資産です。私たちは、物理的および暗号化された障壁を通じて、外部からの問い合わせから絶対的に隔離することを保証します。',
      principles: [
        { title: '絶対的な匿名性', desc: '会員の身元は、ハードウェアレベルで生物学的テレメトリから切り離されています。' },
        { title: 'ゼロ問い合わせポリシー', desc: '会員によって具体的に許可されない限り、管轄区域に関係なく、外部からのデータ要求には対応しません。' },
        { title: '削除する権利', desc: '会員からの確認済みの要求に応じて、物理的およびデジタルの記録は完全に消去されます。' }
      ]
    },
    footer: {
      tagline: '戦略的な生物学的管理と医療グレードの診断。',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      governance: 'プロトコル',
      systems: 'システム',
      advisory: 'アドバイザリー',
      about: '紹介',
      operations: 'オペレーション',
      rights: '全著作権所有。',
      protection: 'データ保護',
      cta_title: '入会の準備はできていますか？',
      cta_desc: '世界で最も先進的な医療ネットワークにアクセスしてください。',
      cta_button: '開始する',
      headquarters: '組織本部',
      address: 'Route de Pré-Bois 20, ICC / 1215 Geneva, Switzerland',
      identity_verified: '本人確認済み',
      access_protocol: 'アクセスプロトコル',
      access_required: 'アクセスが必要'
    }
  },
  Français: {
    common: {
      network: 'Réseau',
      intelligence: 'Analyse',
      advisory: 'Conseil',
      institutional: 'À propos',
      liaison: 'Support',
      apply: 'Adhésion',
      return: 'Retour à l\'accueil',
      back: 'Retour',
      systems: 'Systèmes',
      architecture: 'Architecture',
      infrastructure: 'Infrastructure',
      megamenu: {
        infra_title: 'Réseau Institutionnel',
        infra_desc: '"Géographie Institutionnelle et Assurance Systèmes."',
        global_title: 'Portée Continentale',
        global_desc: 'Présence clinique juridictionnelle dans les territoires mondiaux établis.',
        monitoring_title: 'Surveillance des Systèmes',
        monitoring_desc: 'Protocoles continus d\'assurance de fidélité administrative et clinique.',
        analysis_digital: 'Analyse Numérique',
        analysis_review: 'Protocole de Revue',
        heritage_records: 'Archives Institutionnelles',
        heritage_board: 'Conseil d\'Administration',
        heritage_tag: 'Assurer l\'excellence médicale depuis près d\'un siècle.'
      }
    },
    hero: {
      established: 'Établi en 1926',
      title: 'Soins de santé mondiaux pour ceux qui en attendent plus.',
      description: 'Depuis 1926, nous fournissons une gestion des soins de santé de classe mondiale et des informations cliniques avancées aux dirigeants, familles et organisations qui façonnent l\'avenir.',
      consultation: 'Demander l\'accès',
      overview: 'Aperçu du réseau'
    },
    philosophy: {
      quote: '"La biologie est un actif, pas une loterie."',
      p1: 'La santé ne devrait pas être un jeu de devinettes. Nous pensons que votre santé est votre capital le plus précieux et qu\'elle mérite d\'être gérée avec la même précision que tout autre investissement fondamental.',
      p2: 'La plupart des actes médicaux sont réactifs. Nous changeons la donne en utilisant des informations biologiques approfondies pour vous donner la clarté nécessaire pour maîtriser votre propre avenir.',
      entry: 'L\'excellence commence ici. Nous sommes là pour vous aider à construire une base indestructible.',
      sovereignty_title: "Souveraineté Biologique.",
      priority_label: "Priorité",
      priority_desc: "\"Les résultats cliniques sont fournis sans compromis ni influence externe.\"",
      privacy_label: "Confidentialité Absolue",
      privacy_desc: "\"L'individu est le souverain absolu de ses données biologiques.\"",
      luxury_title: "La santé est le nec plus ultra du",
      luxury_subtitle: "Luxe Discret."
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
      action: 'Exécuter l\'analyse',
      analyzing: 'Traitement des données du réseau...',
      result_headline: 'Analyse terminée.',
      placeholder: 'Décrivez votre état physiologique ou votre demande de santé actuelle pour le réseau clinique...'
    },
    application: {
      successTitle: 'Transmission Reçue',
      successDesc: 'Votre demande a été reçue. Nos officiers de liaison examineront votre profil et vous contacteront sous 48 heures.',
      return: 'Retour au début',
      label: 'Adhésion',
      title: 'Demander l\'accès.',
      description: 'Soumettez votre profil pour examen. Nous maintenons des normes de service élevées en admettant sélectivement de nouveaux membres dans notre réseau mondial.',
      name: 'Nom complet',
      name_placeholder: 'Prénom et Nom',
      email: 'Adresse e-mail',
      email_placeholder: 'nom@exemple.com',
      bio: 'Objectifs',
      bio_placeholder: 'Veuillez décrire vos objectifs de santé...',
      reference: 'Référence (Optionnel)',
      reference_placeholder: 'Qui vous a parrainé ?',
      submit: 'Soumettre la demande',
      processing: 'Envoi en cours...',
      reviewText: 'Toutes les demandes font l\'objet d\'un examen clinique.',
      systemError: 'Erreur Système',
      systemErrorDesc: 'Nous avons rencontré un problème lors du traitement de votre demande. Veuillez vérifier votre connexion ou réessayer plus tard.'
    },
    support: {
      hero_title: 'Services de Support.',
      hero_desc: 'Soutien institutionnel direct pour les membres actuels et les demandes vérifiées.',
      hero_badge: 'LIAISON / SUPPORT',
      form_title: 'Liaison institutionnelle.',
      form_desc: 'Soutien institutionnel direct pour les membres actuels et les demandes vérifiées. Nos officiers de liaison sont disponibles pour la coordination juridictionnelle et l\'assistance à la gestion des données cliniques.',
      name: 'Nom complet',
      name_placeholder: 'Votre nom',
      email: 'Adresse e-mail',
      email_placeholder: 'nom@exemple.com',
      subject: 'Sujet',
      subject_placeholder: 'Comment pouvons-nous vous aider ?',
      message: 'Message',
      message_placeholder: 'Détails...',
      submit: 'Envoyer le message',
      processing: 'Envoi en cours...',
      successTitle: 'Transmission Reçue',
      successDesc: 'Votre message a été bien reçu. Nous vous répondrons dans les 24 heures.',
      anotherMessage: 'Envoyer un autre message',
      contactTitle: 'Nœud de Contact',
      comms: 'Communications',
      commsDesc: 'Canal crypté direct via réponse au formulaire.',
      secureLine: 'Ligne Sécurisée',
      hqNode: 'Nœud du Siège'
    },
    membership: {
      hero_title: 'Adhésion.',
      hero_desc: 'Initiez votre protocole biologique. L\'accès au réseau Medizer est strictement géré pour garantir l\'intégrité institutionnelle.',
      hero_badge: 'SYSTÈMES / ACCÈS'
    },
    infrastructure: {
      title: 'Fondement Institutionnel.',
      subtitle: 'Architecture des Systèmes',
      description: 'L\'infrastructure Medizer est un réseau mondialement distribué de référentiels cliniques et de nœuds analytiques, conçu pour une souveraineté absolue des données et une continuité opérationnelle.',
      precision_title: "La précision à grande échelle.",
      precision_desc: "Chaque installation est un environnement spécialement conçu pour une fidélité biologique absolue. Nous maintenons un contrôle direct sur tous les niveaux de notre système — du matériel physique au personnel clinique régional — garantissant une trajectoire de santé fluide pour nos membres.",
      specs: [
        { label: 'Pureté de l\'air', desc: 'Normes de filtration HEPA chirurgicales.' },
        { label: 'Gestion des données', desc: 'Résidence physique sur serveur de niveau 4.' },
        { label: 'Contrôle d\'accès', desc: 'Protocole biométrique vasculaire.' },
        { label: 'Sécurité énergétique', desc: 'Alimentation redondante avec piles à combustible à long terme.' }
      ],
      registry_title: "Registre des Installations.",
      registry_subtitle: "Registre des Opérations Mondiales",
      table: {
        location: "Emplacement",
        classification: "Classification",
        status: "Statut",
        jurisdiction: "Juridiction"
      },
      closing_title: "Confidentialité par",
      closing_subtitle: "Isolation physique.",
      closing_quote: "\"Nous parvenons à une sécurité absolue en supprimant entièrement les données cliniques du cloud. Votre dossier biologique réside entre nos murs, et nulle part ailleurs.\""
    },
    globalNetwork: {
      title: 'Centres Régionaux.',
      description: 'Medizer exploite un réseau d\'environnements cliniques de haute sécurité. Chaque installation est équipée de réseaux de diagnostic propriétaires et de liens directs avec le siège de Genève.',
      nodes: {
        geneva: { city: 'Genève', title: 'Primaire Institutionnel' },
        london: { city: 'Londres', title: 'Résidence Analytique' },
        singapore: { city: 'Singapour', title: 'Nœud Clinique' },
        dubai: { city: 'Dubaï', title: 'Installation Médicale' }
      },
      stats: {
        security_class: 'Classe de Sécurité',
        power_backup: 'Secours Électrique',
        air_filtration: 'Filtration d\'Air',
        response_team: 'Équipe de Réponse',
        compliant_title: 'Conformité Forteresse.',
        compliant_desc: 'Chaque installation Medizer est construite selon les normes de forteresse institutionnelle. Nous ne louons pas d\'espace ; nous commandons l\'architecture.',
        biometric: 'Accès biométrique uniquement pour toutes les zones cliniques et analytiques.',
        power_grids: 'Réseaux électriques et gestion des déchets isolés par juridiction.',
        shielded: 'Construction blindée pour empêcher les fuites de données électromagnétiques.',
        inquiry_button: 'Demande d\'accès régional'
      },
      geneva_desc: 'Le siège de notre conseil clinique principal et le répertoire central du registre mondial.',
      specialization: 'Spécialisation',
      specs_geneva: ['Archivage des données institutionnelles', 'Supervision éthique clinique', 'Gestion de lignée à haute valeur'],
      singapore_desc: 'Centre de liaison pour la résidence des données cliniques localisées dans les territoires de l\'Asie-Pacifique.',
      staff_count: 'Effectif',
      sovereignty: 'Souveraineté',
      specialists: 'Spécialistes',
      full_autonomy: 'Autonomie totale',
      london_desc: 'Installation dédiée aux protocoles de séquençage et de synthèse biologique de haute fidélité.',
      array_capacity: 'Capacité du réseau',
      dubai_desc: 'Installation de réponse rapide pour le suivi métabolique localisé et l\'optimisation biologique aiguë.',
      response_time: 'TEMPS DE RÉPONSE : < 2H',
      protocol_title: 'Intelligence Juridictionnelle.',
      protocol_desc: 'Notre sélection de nœuds mondiaux est motivée par une exigence de souveraineté clinique et juridique absolue. Chaque installation fonctionne comme une entité sub-souveraine sur son territoire.',
      continuity_title: 'Directives Unifiées.',
      continuity_desc: 'La gestion de la santé comme un actif stratégique à travers divers territoires nécessite une référence institutionnelle unifiée.',
      principles: [
        { title: 'Logique Juridictionnelle', desc: 'Nous opérons avec une résidence physique complète, garantissant que les données des membres restent dans les limites légales de la juridiction locale.' },
        { title: 'Gestion Institutionnelle Directe', desc: 'Pas de sous-traitance. Chaque officier médical, technicien et agent de sécurité est un employé direct de l\'institution.' },
        { title: 'Stack Physique Souverain', desc: 'Propriété totale de la pile physique. Nous évitons toute dépendance vis-à-vis des services tiers.' },
        { title: 'Pools de Données Isolés', desc: 'Les référentiels biologiques critiques sont physiquement isolés des influences des réseaux externes.' }
      ]
    },
    monitoring: {
      title: 'Surveillance des Systèmes.',
      subtitle: 'Protocoles Actifs',
      description: 'Télémétrie en temps réel de notre réseau clinique mondial. Surveillance de la latence biologique absolue et du débit de diagnostic.',
      metrics: {
        latency: 'Latence Biologique',
        integrity: 'Intégrité du Réseau',
        throughput: 'Débit Clinique',
        security: 'État du Verrouillage Matériel'
      },
      dashboard: {
        operational_mode: 'Mode Opérationnel // Actif',
        command_interface: 'Interface de Commande.',
        last_verification: 'Dernière Vérification',
        residency: 'Résidence des Données',
        latency: 'Latence Réseau',
        encryption: 'Protocole de Cryptage',
        board: 'Vérification du Conseil',
        audit_cycle: 'Le Cycle d\'Audit Institutionnel.',
        request_audit: 'Demander un Audit Institutionnel',
        status_optimal: 'Optimal',
        status_continuous: 'Continu',
        status_locked: 'Verrouillé',
        status_verified: 'Vérifié'
      },
      integrity: {
        title: "Intégrité Clinique.",
        desc: "Nos protocoles de surveillance sont conçus pour détecter les écarts biologiques les plus minimes, garantissant que chaque résultat clinique reste immuable et souverain.",
        directive_title: "Directive 1926-C : Le Mandat de Surveillance",
        directive_desc: "Établie lors de la synthèse du conseil d'administration de 2022, la directive 1926-C impose que toute télémétrie biologique soit auditée en temps réel par un moteur de synthèse multiniveau, avec une vérification manuelle du conseil clinique pour tout écart dépassant 0,04 % de variance."
      },
      log: {
        title: "Journal Institutionnel",
        secured: "SÉCURISÉ",
        footer: "Cette interface est réservée à l'observation administrative. Toute modification nécessite un consensus du conseil clinique multisignature enregistré dans les Archives du Siècle."
      }
    },
    intelligencePage: {
      title: 'Directives Cliniques.',
      subtitle: 'Gouvernance & Conseil',
      description: 'Nous traduisons la complexity biologique en une intelligence stratégique définitive. Nos directives sont régies par un cadre éthique multi-jurisdictionnel.',
      board: {
        title: "Le Conseil Consultatif.",
        desc: "Accès direct à notre conseil clinique à Genève. Ce lien sécurisé assure une synthèse continue de tous les flux de données biologiques institutionnels."
      },
      modules_title: "Modules d'Intelligence.",
      modules_desc: "Voies cliniques ciblées pour une gestion biologique complexe.",
      modules: [
        { title: 'Intégrité Génomique', desc: 'Modélisation continue du comportement épigénétique et de la santé de la transcription.' },
        { title: 'Supervision Métabolique', desc: 'Évaluation de précision de la conversion d\'énergie cellulaire et du stress oxydatif.' },
        { title: 'Garde Neurologique', desc: 'Surveillance de la résilience pour des cycles de décision de haute précision.' },
        { title: 'Analyse de Lignée', desc: 'Suivi de santé longitudinal pour le capital multi-générationnel.' }
      ]
    },
    heritage: {
      title: 'Patrimoine Clinique.',
      subtitle: 'Établi en 1926',
      description: 'Notre longévité ne se mesure pas en années, mais dans la résilience biologique de nos familles.',
      mandate_title: "Le Mandat de Genève.",
      mandate_desc: "Fondé en tant que laboratoire privé d'endocrinologie en 1926, le cœur de Medizer repose sur un seul principe : la souveraineté biologique absolue.",
      ethos_title: "Éthique Institutionnelle",
      ethos_quote: "\"Nous pensons que la médecine réactive est un échec stratégique. La véritable excellence clinique consiste à prédire le déclin avant qu'il ne se manifeste.\"",
      ethos_desc: "Medizer agit comme un gestionnaire clinique pour ceux dont la santé est un atout critique. Notre philosophie est enracinée dans la tradition suisse de confidentialité absolue et de neutralité clinique.",
      features: [
        { title: 'Stockage Hors Ligne', desc: 'Vos dossiers n\'existent que sur nos machines physiques sécurisées. Aucune résidence dans les systèmes publics.' },
        { title: 'Confidentialité Vasculaire', desc: 'Couches d\'authentification basées sur des marqueurs physiologiques irréversibles, garantissant que l\'accès aux données n\'appartient qu\'à vous.' }
      ],
      milestones_title: "Jalons.",
      milestones: [
        { year: '1926', title: 'Le Laboratoire de la Vieille Ville', desc: 'Le Dr Lukas Medizer fonde le premier laboratoire spécialisé dans la santé surrénalienne et métabolique pour les chefs d\'entreprise.' },
        { year: '1968', title: 'Virage Cryptographique', desc: 'Pionnier du cryptage des dossiers hors réseau. Le fondement de notre architecture de sécurité moderne.' },
        { year: '1994', title: 'Expansion du Réseau', desc: 'Transition d\'un laboratoire unique à Genève vers un réseau décentralisé d\'installations cliniques de haute sécurité.' },
        { year: '2022', title: 'Analyse Clinique', desc: 'Intégration d\'analyses informatiques avancées dans nos protocoles de diagnostic.' }
      ],
      governance_badge: "Gouvernance Institutionnelle",
      governance_title: "Administré par le",
      governance_subtitle: "Conseil Médical de Genève.",
      governance_quote: "\"Notre conseil est composé de stratèges cliniques de premier plan, garantissant que Medizer reste la norme d'excellence pour la préservation de la santé.\"",
      stats: {
        privacy: "Audit de Confidentialité",
        residency: "Résidence des Données",
        access: "Accès Clinique"
      }
    },
    accessPortal: {
      title: 'Passerelle d\'Accès.',
      subtitle: 'Accès Sécurisé Institutionnel',
      description: 'Ce terminal est réservé au personnel authentifié de Medizer et aux membres vérifiés. Veuillez vous authentifier pour continuer.',
      button: 'Entrer dans le Portail',
      status_authorized: 'Autorisé',
      status_standby: 'En attente',
      privacy_title: "Confidentialité Institutionnelle.",
      privacy_desc: "Tunnel de cryptage de données avancé pour tous les dossiers cliniques.",
      verified_title: "Accès Vérifié.",
      verified_desc: "Vérification multi-facteurs requise pour tous les membres du conseil.",
      confirmed: "Identité Confirmée",
      verification: "Vérification d'Identité",
      connected: "Connecté en tant que",
      authenticate: "Veuillez vous authentifier via le portail sécurisé",
      authorized: "Accès Directiva Accordé",
      end_session: "Terminer la Session",
      link: "Lien Institutionnel",
      core: "Cœur de Genève"
    },
    corePage: {
      title: 'Le Cœur.',
      subtitle: 'Infrastructure Analytique',
      description: 'Déploiement d\'intelligence biologique avancée et de modélisation prédictive pour transformer les flux de données brutes en prospective institutionnelle.',
      sovereignty_title: "Souveraineté Informatique.",
      sovereignty_desc: "Le Cœur Medizer n'est pas un lieu unique, mais un réseau d'intelligence distribué fonctionnant sous un mandat clinique unifié. Nous utilisons du silicium gravé sur mesure pour maintenir une intégrité absolue des données au niveau matériel.",
      synthesis_title: "Architecture de Synthèse.",
      synthesis_desc: "Notre plateforme gère la complexité non linéaire des systèmes biologiques grâce à une parallélisation massive et une modélisation de haute fidélité.",
      stats: {
        parallel: "Flux Parallèles",
        velocity: "Vitesse d'Audit",
        residency: "Résidence des Données",
        encryption: "Niveau de Cryptage"
      },
      status_nominal: "Statut // Nominal",
      hardware_tier: "Niveau matériel // Silicium souverain",
      uptime_val: "99.9997%",
      zero_val: "Zéro",
      system_ready: "SYSTÈME PRÊT POUR L'ENQUÊTE",
      stack: {
        title: "Le Stack Matériel.",
        desc: "Pour garantir une confidentialité absolue des données, nous évitons le matériel informatique grand public standard. Notre \"Supernode de Genève\" utilise des processeurs propriétaires de la série M conçus pour le cryptage à l'état froid et la modélisation biologique à haute vitesse.",
        uptime: "Fidélité de Disponibilité",
        dependencies: "Zéro Dépendance Externe"
      },
      modules_title: "Modules de Synthèse Clinique.",
      modules_desc: "Le Cœur fonctionne à travers trois domaines analytiques primaires, chacun régi par son propre ensemble de protocoles institutionnels et de garde-fous éthiques.",
      modules: [
        { title: 'Synthèse Métabolique', desc: 'Surveillance en temps réel des changements biochimiques pour maintenir une performance physiologique de pointe dans tous les centres juridictionnels.', focus: 'Bio-Fidélité' },
        { title: 'Prévisions Génomiques', desc: 'Analyse longitudinale des empreintes génétiques pour anticiper les variations biologiques potentielles des décennies avant la manifestation clinique.', focus: 'Capital Générationnel' },
        { title: 'Intégrité Neurologique', desc: 'Surveillance haute résolution de la fidélité cognitive et neurologique pour assurer la préservation intellectuelle à long terme.', focus: 'Souveraineté Cognitive' }
      ],
      features: [
        { title: 'Synthèse Neurale', desc: 'Moteurs de reconnaissance de formes avancés optimisés pour la cartographie des trajectoires de santé longitudinales et la détection d\'anomalies.' },
        { title: 'Archives Immuables', desc: 'Chaque dérivé analytique est signé cryptographiquement et archivé dans nos coffres souverains sur trois continents.' },
        { title: 'Télémétrie en temps réel', desc: 'Ingestion et traitement instantanés des flux biométriques, fournissant un retour clinique immédiat pour l\'examen par le conseil.' },
        { title: 'Garde du Protocole', desc: 'Application autonome des directives cliniques institutionnelles, rejetant toute logique qui dévie de notre base éthique.' }
      ],
      cta_title: "Découvrez l'Avant-garde.",
      cta_desc: "Des briefings analytiques avancés sont disponibles pour les partenaires institutionnels et les membres premium.",
      cta_button: "Demander un Briefing Système"
    },
    ethicsPage: {
      title: 'Protocole d\'Éthique.',
      subtitle: 'Gouvernance Institutionnelle',
      description: 'Gouverner l\'acquisition et la gestion de l\'intelligence biologique à travers un cadre de droits individuels souverains.',
      guardrails_title: "Les Garde-fous.",
      guardrails_desc: "Le protocole éthique de Medizer est soutenu par des contre-mesures techniques qui empêchent la violation de nos directives fondamentales. Notre sécurité au niveau du silicium garantit que ces règles sont immuables.",
      guardrails: [
        { title: 'Non-Commercialité Absolue', desc: 'À aucun moment, pour quelque raison que ce soit, les données biologiques des membres ne sont fournies à des intérêts commerciaux tiers. Nos revenus proviennent de l\'adhésion, pas de l\'arbitrage de données.' },
        { title: 'Divulgation Obligatoire', desc: 'Tout changement dans la base analytique ou la logique de synthèse est divulgué au conseil des membres 90 jours avant l\'activation.' },
        { title: 'Sanctité Biologique', desc: 'Aucune donnée biologique n\'est utilisée pour une modélisation spéculative d\'« amélioration » sans le consentement explicite et juridictionnel du membre individuel.' },
        { title: 'L\'Archive Perpétuelle', desc: 'Les membres ont le droit de migrer leurs données vers des niveaux de stockage à froid secondaires au-delà de notre environnement de synthèse actif à tout moment.' }
      ],
      governance_title: "Niveaux de Supervision Institutionnelle.",
      governance_desc: "La transparence est maintenue grâce à un modèle de gouvernance à trois niveaux, séparant les opérations cliniques de l'arbitrage éthique.",
      enforced_constraints: "Contraintes imposées",
      tiers: [
        { tier: 'Niveau 1 // Conseil Institutionnel', role: 'Supervision directe des opérations cliniques quotidiennes et de la fidélité de la synthèse globale.', comp: 'Cliniciens seniors internes' },
        { tier: 'Niveau 2 // Le Conseil des Directives', role: 'Audit de haut niveau des protocoles de base et de la trajectoire éthique à long terme.', comp: 'Bio-éthiciens & juristes' },
        { tier: 'Niveau 3 // Tribunal Indépendant', role: 'Arbitrage externe des droits des membres et des litiges relatifs à la conformité juridictionnelle.', comp: 'Observateurs tiers indépendants' }
      ],
      verification_title: "Vérification Institutionnelle.",
      verification_desc: "Medizer fonctionne selon des cadres bioéthiques stricts établis à notre fondation de Genève. Nos protocoles sont soumis à un examen semestriel par des chercheurs indépendants.",
      audit_report: "Rapport d'audit éthique 2024.pdf",
      manifesto: "Manifeste de transparence",
      council_title: "Le Conseil des Directives.",
      council_desc: "Notre Conseil veille à ce que l'institution reste fidèle à son mandat fondateur tout en s'adaptant aux technologies biologiques émergentes.",
      request_review: "Demander un examen institutionnel"
    },
    directives: {
      title: 'Directives.',
      subtitle: 'Mandat & Cœur',
      description: 'Lignes directrices institutionnelles assurant la perpétuation de données biologiques de haute fidélité et la sécurité des membres pour le siècle à venir.',
      items: [
        { id: '01', title: 'Préservation de la Lignée', desc: 'Nous priorisons le suivi longitudinal des marqueurs biologiques sur des décennies, assurant que les trajectoires de santé sont analysées dans leur contexte historique complet.' },
        { id: '02', title: 'Autonomie Analytique', desc: 'Medizer se réserve tous les droits sur le développement de méthodologies propriétaires, résistant à la pression commerciale de commoditiser les instantanés de santé individuels au profit d\'une analyse de structure profonde.' },
        { id: '03', title: 'Intendance Discrète', desc: 'Le réseau existe en tant qu\'utilité privée. Nous maintenons une politique de visibilité nulle pour les requêtes externes concernant les adhésions individuelles ou les répertoires de données.' }
      ],
      cta_title: 'En phase avec notre mission ?',
      cta_desc: 'L\'adhésion au réseau Medizer se fait sur invitation institutionnelle ou après examen d\'une candidature qualifiée.',
      cta_button: 'Demander l\'accès'
    },
    review: {
      title: 'Revue du Siècle.',
      subtitle: 'Rétrospective & Archive',
      description: 'Une analyse chronologique de l\'impact de Medizer sur la gestion de la santé institutionnelle et l\'intégrité des données biologiques depuis 1926.',
      milestones: [
        { year: '1926', title: 'Fondation', desc: 'Établi à Genève en tant que répertoire de données privé pour la recherche longitudinale.' },
        { year: '1954', title: 'L\'Accord de Zurich', desc: 'Codification des droits à la vie privée des membres et des protocoles de gestion des données.' },
        { year: '1982', title: 'Expansion du Réseau', desc: 'Activation de sites secondaires à Singapour et New York.' },
        { year: '2008', title: 'Virage Bio-Numérique', desc: 'Transition de toutes les archives physiques vers une architecture numérique souveraine cryptée.' },
        { year: '2024', title: 'Jalon du Siècle', desc: 'Approche des 100 ans de préservation ininterrompue des données biologiques.' }
      ],
      footer_tag: 'L\'Avenir de la Souveraineté',
      footer_title: 'Sécurisez votre lignée dès aujourd\'hui.',
      footer_button: 'Demander l\'accès'
    },
    board: {
      title: 'Conseil Médical',
      subtitle: 'Gouvernance Institutionnelle',
      description: 'Le conseil d\'administration de Medizer est composé de sept membres permanents et de quatre chercheurs cliniques tournants, assurant une surveillance éthique et scientifique équilibrée.',
      mandate_title: 'Le Mandat Central',
      mandate_desc: 'Le conseil opère sous un mandat direct pour préserver la fidélité biologique de notre registre de membres au-dessus de tout intérêt commercial ou académique externe.',
      members: [
        { name: 'Dr Alistair Vance', role: 'Chef de la Synthèse Clinique', bio: 'Ancien responsable de la génomique longitudinale à l\'Institut de Zurich.' },
        { name: 'Elena Moretti', role: 'Directrice de la Surveillance Éthique', bio: 'Chercheuse en droit international spécialisée dans la souveraineté des données biologiques.' },
        { name: 'Dr Kenji Tanaka', role: 'Responsable du Réseau Mondial', bio: 'Responsable de l\'architecture de l\'infrastructure des nœuds souverains en Asie.' }
      ],
      report_title: "Rapport de Transparence 2024",
      report_desc: "Consultez nos dernières conclusions sur la gouvernance et la conformité.",
      report_button: "Télécharger le PDF"
    },
    rights: {
      title: 'Droits à la Vie Privée',
      subtitle: 'Souveraineté des Membres',
      description: 'Vos données biologiques sont votre actif le plus privé. Nous garantissons leur isolement absolu de toute requête externe par des barrières physiques et cryptographiques.',
      principles: [
        { title: 'Anonymat Absolu', desc: 'Les identités des membres sont découplées de la télémétrie biologique au niveau matériel.' },
        { title: 'Politique de Requête Nulle', desc: 'Nous ne répondons pas aux demandes de données externes, quelle que soit la juridiction, sauf autorisation spécifique du membre.' },
        { title: 'Droit à la Suppression', desc: 'Les archives physiques et numériques sont complètement purgées sur demande vérifiée du membre.' }
      ]
    },
    footer: {
      tagline: 'Gestion biologique stratégique et diagnostics de qualité médicale.',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      governance: 'Protocole',
      systems: 'Systèmes',
      advisory: 'Conseil',
      about: 'À propos',
      operations: 'Opérations',
      rights: 'Tous droits réservés.',
      protection: 'Protection des données',
      cta_title: 'Prêt à nous rejoindre ?',
      cta_desc: 'Accédez au réseau médical le plus avancé au monde.',
      cta_button: 'Commencer',
      headquarters: 'Siège Institutionnel',
      address: 'Route de Pré-Bois 20, ICC / 1215 Genève, Suisse',
      identity_verified: 'Identité vérifiée',
      access_protocol: 'Protocole d\'accès',
      access_required: 'Accès requis'
    }
  }
};
