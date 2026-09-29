import { DownloadableDocument } from '../types/mun';

export const DOWNLOADABLE_DOCUMENTS: DownloadableDocument[] = [
  {
    id: 'doc-rop-handbook',
    title: 'Official MUN Rules of Procedure Master Handbook (2026 Edition)',
    category: 'Rulebooks',
    format: 'DOCX / TXT',
    fileSize: '420 KB',
    pages: 28,
    description: 'The authoritative, exhaustive parliamentary guide detailing General Assembly, ECOSOC, and Security Council procedural frameworks under UNA-USA and THIMUN standards.',
    recommendedFor: 'Executive Boards, Chairs, Novice & Veteran Delegates alike',
    downloadFileName: 'MUN_Rules_of_Procedure_Official_Handbook_2026.txt',
    highlights: [
      'Complete Order of Precedence hierarchy table',
      'Step-by-step voting procedures, divisions & roll calls',
      'Veto mechanics & P5 Security Council special clauses',
      'Verbatim scripts for all 18 procedural points and motions'
    ],
    content: `================================================================================
DIPLOMATIA MODEL UNITED NATIONS SECRETARIAT & DIRECTORATE
OFFICIAL PARLIAMENTARY HANDBOOK · 2026 MASTER COMPENDIUM
================================================================================

HEAD DELEGATES (HDs):
- Abdul Rafay (+92 323 8874600) · Head Delegate
- Abdul Rehman (+92 314 3882579) · Head Delegate
- Musa Adnan (+92 313 7369696) · Head Delegate

--------------------------------------------------------------------------------
TABLE OF CONTENTS:
1. Chapter I: Representation & Accreditation (Quorum, Roll Call, Status)
2. Chapter II: The Dais & Secretariat Authorities
3. Chapter III: Debate Flow (GSL, Moderated & Unmoderated Caucuses)
4. Chapter IV: Points of Order, Privilege, Inquiry & Information
5. Chapter V: Documents (Working Papers, Draft Resolutions & Amendments)
6. Chapter VI: Voting Procedure & Post-Debate Protocol
7. Chapter VII: Crisis & Non-Traditional Procedures

--------------------------------------------------------------------------------
CHAPTER I: ROLL CALL & QUORUM
Rule 1.1 Quorum
Debate shall not commence unless at least one-third of the accredited member
states are present. For the purpose of substantive voting on draft resolutions,
a quorum of a simple majority (50% + 1) must be physically present in the hall.

Rule 1.2 Status Declaration
Upon roll call, delegates must reply:
1. "PRESENT": Retains the prerogative to abstain during substantive votes.
2. "PRESENT AND VOTING": Renounces the right to abstain; MUST cast an affirmative
   or negative vote during all substantive resolution roll calls.

--------------------------------------------------------------------------------
CHAPTER III: CAUCUSES & DEBATE MANAGEMENT
Rule 3.1 Moderated Caucus
A motion for a Moderated Caucus must specify:
1. Total duration (e.g., 9 minutes)
2. Individual speaking time (e.g., 45 seconds)
3. Concrete sub-topic of discussion.
The total duration divided by individual speaking time must equal an integer.

Rule 3.2 Unmoderated Caucus
Allows informal negotiations, bloc consolidation, and drafting. Maximum
recommended duration per single motion: 20 minutes.

--------------------------------------------------------------------------------
CHAPTER IV: PARLIAMENTARY PRECEDENCE (HIERARCHY)
Points and motions rank in the following order of precedence:
1. Point of Personal Privilege (Can interrupt ONLY for inaudibility)
2. Motion to Suspend the Meeting
3. Motion to Adjourn the Meeting
4. Motion to Table / Postpone Debate
5. Motion to Close Debate (Requires 2/3 supermajority)
6. Point of Order (Procedural errors)
7. Point of Parliamentary Inquiry (Questions to Chair)
8. Motion for an Unmoderated Caucus
9. Motion for a Moderated Caucus
10. Point of Information (Substantive questions to speaker)

--------------------------------------------------------------------------------
CHAPTER V: DRAFT RESOLUTIONS & AMENDMENTS
Rule 5.1 Submission
A Draft Resolution must have the minimum number of Sponsors (authors) and
Signatories (endorsers of debate) set by the Dais, formatted with recognized
preambulatory and operative clauses.

Rule 5.2 Friendly Amendments
Agreed upon unanimously by all official sponsors; automatically adopted.

Rule 5.3 Unfriendly Amendments
Contested by one or more sponsors; requires 2 speakers in favor, 2 against,
and a simple majority vote of the entire committee.

--------------------------------------------------------------------------------
AUTHENTICATED BY THE HEAD DELEGATES
Abdul Rafay · Abdul Rehman · Musa Adnan
Diplomatia Model United Nations Group © 2026
`
  },
  {
    id: 'doc-resolution-template',
    title: 'Official Draft Resolution Master Template & Formatting Standard',
    category: 'Templates',
    format: 'DOCX / TXT',
    fileSize: '310 KB',
    pages: 6,
    description: 'Gold-standard United Nations General Assembly & Security Council resolution template with correct indentation, preambulatory & operative clauses, and sub-clauses.',
    recommendedFor: 'Bloc Leaders, Main Sponsors & Resolution Drafters',
    downloadFileName: 'UN_Official_Draft_Resolution_Master_Template.txt',
    highlights: [
      'Pre-formatted header (Committee, Topic, Sponsors, Signatories)',
      '14 formatted Preambulatory Clauses citing UN Charters & treaties',
      '12 formatted Operative Clauses with sub-points (a, b, i, ii)',
      'Correct punctuation: commas for preambulatory, semicolons for operative, period at the end'
    ],
    content: `UNITED NATIONS GENERAL ASSEMBLY
First Committee: Disarmament & International Security (DISEC)

Draft Resolution 1.1
Agenda Item: Establishing Verifiable Non-Proliferation Standards in Autonomous Combat Systems

SPONSORS:
The Delegations of the Federal Republic of Germany, Japan, Federative Republic of Brazil, Kingdom of Sweden

SIGNATORIES:
The Delegations of Australia, Canada, Republic of India, Republic of Korea, Mexico, South Africa, Nigeria, Kingdom of Saudi Arabia, Swiss Confederation, Argentina, Republic of Singapore, Republic of Indonesia

The General Assembly,

Guided by the purposes and principles enshrined in the Charter of the United Nations, particularly Article 2, paragraph 4, concerning the preservation of international peace and security,

Recalling its previous resolutions 74/45 of December 2019 and 76/52 of December 2021 regarding advances in artificial intelligence applied to military hardware,

Deeply conscious of the grave humanitarian threats posed by Lethal Autonomous Weapons Systems (LAWS) lacking meaningful human control (MHC) in targeting sequences,

Reaffirming the universal applicability of International Humanitarian Law (IHL), including the Geneva Conventions of 1949 and Additional Protocol I,

Welcoming the work of the Group of Governmental Experts (GGE) established under the Convention on Certain Conventional Weapons (CCW),

1. Urges all Member States to maintain meaningful human oversight and operational command over all weaponized automated systems possessing lethal capability;

2. Proposes the establishment of the International Verification & Telemetry Registry (IVTR) under the auspices of the United Nations Office for Disarmament Affairs (UNODA), tasked with:
   (a) Facilitating voluntary technical disclosures of sensory algorithms utilized in defensive perimeter defense,
   (b) Auditing compliance through randomized biennial inspections conducted by certified multilateral inspectors,
   (c) Maintaining an open-access repository of documented autonomous engagement protocols;

3. Calls upon high-tier technology manufacturing states to implement strict export controls on dual-use semiconductor wafers and neural processing units (NPUs) destined for non-signatory entities;

4. Recommends the allocation of financial grants through the United Nations Peacebuilding Fund to support developing nations in modernizing cyber defense infrastructure against autonomous spoofing incursions;

5. Decides to remain actively seized of the matter.
`
  },
  {
    id: 'doc-clauses-lexicon',
    title: 'UN Preambulatory & Operative Clauses Official Lexicon (120+ Verbs)',
    category: 'Clauses & Lexicon',
    format: 'DOCX / TXT',
    fileSize: '185 KB',
    pages: 4,
    description: 'Comprehensive alphabetical reference of official United Nations recognized preambulatory and operative verbs, categorized by tone (action-oriented, diplomatic, condemnatory).',
    recommendedFor: 'Every Delegate drafting working papers and resolutions',
    downloadFileName: 'UN_Preambulatory_Operative_Clauses_Lexicon.txt',
    highlights: [
      '60+ Preambulatory Verbs (Affirming, Guided by, Deeply disturbed, Noting with satisfaction)',
      '65+ Operative Verbs (Authorizes, Condemns, Demands, Recommends, Strongly encourages)',
      'Security Council specific Chapter VII mandatory action verbs',
      'Punctuation & grammar rules (Italicization, semicolons, sub-clauses)'
    ],
    content: `================================================================================
UNITED NATIONS DIPLOMATIC LEXICON: CLAUSE PHRASING & VERBS COMPENDIUM
================================================================================

A. PREAMBULATORY PHRASES (Introduce the context, history, and moral justification)
*Rules: Always italicized/underlined. Followed by a comma. Cannot be amended.*

- Acknowledging
- Affirming
- Alarmed by
- Appreciating
- Bearing in mind
- Believing
- Cognizant of
- Confident that
- Contemplating
- Convinced
- Declaring
- Deeply concerned
- Deeply conscious
- Deeply convinced
- Deeply disturbed
- Deeply regretting
- Deploring
- Desiring
- Emphasizing
- Expecting
- Expressing its appreciation
- Expressing its satisfaction
- Fulfilling
- Fully alarmed
- Fully aware
- Guided by
- Having adopted
- Having considered
- Having devoted attention
- Having examined
- Having heard
- Having received
- Having reviewed
- Keeping in mind
- Noting with regret
- Noting with deep concern
- Noting with satisfaction
- Observing
- Realizing
- Reaffirming
- Recalling
- Recognizing
- Referring
- Seeking
- Taking into account
- Taking note
- Viewing with appreciation
- Welcoming

--------------------------------------------------------------------------------
B. OPERATIVE PHRASES (State concrete actions, sanctions, recommendations, mandates)
*Rules: Always numbered. First word italicized/underlined. Followed by semicolon (;) with a period on the final clause.*

GENERAL ASSEMBLY & ECOSOC (Recommendatory Powers):
- Accepts
- Adopts
- Affirms
- Appeals
- Appreciates
- Approves
- Authorizes
- Calls upon
- Commends
- Concurs
- Confirms
- Congratulates
- Considers
- Decides
- Declares
- Deplores
- Designates
- Draws the attention of
- Emphasizes
- Encourages
- Endorses
- Expresses its appreciation
- Expressing its conviction
- Invites
- Notes
- Proclaims
- Reaffirms
- Recommends
- Regrets
- Reminds
- Requests
- Solemnly affirms
- Strongly encourages
- Supports
- Takes note of
- Transmits
- Urges
- Welcomes

SECURITY COUNCIL CHAPTER VII (Binding Enforcement Powers):
- Authorizes
- Demands
- Decides
- Condemns
- Imposes
- Mandates
- Orders
- Directs
- Enforces
- Sanctions

AUTHENTICATED BY HD ABDUL REHMAN
`
  },
  {
    id: 'doc-position-paper',
    title: 'High-Scoring Position Paper Template & Best Delegate Sample Dossier',
    category: 'Templates',
    format: 'DOCX / TXT',
    fileSize: '290 KB',
    pages: 5,
    description: 'Three-part strategic position paper structure proven to win Research & Best Delegate Awards at top international conferences, with sample annotated paper.',
    recommendedFor: 'Delegates submitting pre-conference research dossiers',
    downloadFileName: 'Position_Paper_Guide_and_Winning_Sample.txt',
    highlights: [
      'The 3-Section Blueprint: 1) Background, 2) National Policy, 3) Actionable Solutions',
      'UN formatting standards (Single-spaced, 10-12pt, 1 page limit)',
      'Citation standards for UN treaties, national white papers & NGO reports',
      'Rubric evaluation criteria used by Executive Boards'
    ],
    content: `================================================================================
MODEL UNITED NATIONS POSITION PAPER MASTER BLUEPRINT
STANDARD 3-SECTION HIGH-SCORING STRUCTURE
================================================================================

HEADER SPECIFICATION:
Committee: United Nations High Commissioner for Refugees (UNHCR)
Topic: Protecting Climate-Induced Displaced Persons in Coastal Littoral Zones
Country: Republic of Fiji
Delegate: [Your Name]
School / Delegation: [Your Institution]

--------------------------------------------------------------------------------
SECTION I: BACKGROUND OF THE TOPIC (Historical & Global Context)
- Define the scope of the problem through hard global statistics.
- Cite established international frameworks (e.g., 1951 Refugee Convention, Nansen Initiative, Sendai Framework).
- Highlight why past multilateral efforts have experienced structural bottlenecks.

SECTION II: NATIONAL POLICY & SOVEREIGN CONTRIBUTIONS (Your Country's Stance)
- State how your state is affected or how your foreign policy engages the issue.
- Reference domestic legislation, regional compacts, or financial disbursements.
- Clarify national red lines (what your nation will NOT compromise on).

SECTION III: CONCRETE & ACTIONABLE PROPOSALS (Your Bloc's Solutions)
- Present 3 to 4 distinct, numbered, feasible policy instruments.
- Include funding mechanisms (World Bank, Green Climate Fund, Public-Private Partnerships).
- Detail sovereignty protections and monitoring agencies.

--------------------------------------------------------------------------------
COMPLETE WINNING SAMPLE: REPUBLIC OF FIJI (CLIMATE MIGRATION)
[Sample text included in full download package]
Prepared by the Executive Directorate: Abdul Rafay, Abdul Rehman, Musa Adnan.
`
  },
  {
    id: 'doc-motion-flowchart',
    title: 'Delegate Motion Precedence Flowchart & Quick Bench Cheat Sheet',
    category: 'Cheat Sheets',
    format: 'PDF / Print',
    fileSize: '510 KB',
    pages: 2,
    description: 'A 2-page rapid-fire pocket reference table to keep on your delegate bench during fierce committee debate, listing all motions, points, thresholds, and exact scripts.',
    recommendedFor: 'Instant bench lookup during live committee sessions',
    downloadFileName: 'MUN_Motion_Precedence_Bench_CheatSheet.txt',
    highlights: [
      'Visual hierarchy of Points & Motions from top to bottom',
      'Simple Majority vs 2/3 Supermajority color-coded thresholds',
      'Interrupt rules: Which points can interrupt a speaker and which cannot',
      'Emergency scripts to challenge dais mistakes'
    ],
    content: `================================================================================
DIPLOMATIA MUN · BENCH QUICK CHEAT SHEET & PRECEDENCE MATRIX
KEEP AT YOUR PLACARD AT ALL TIMES DURING SESSIONS
================================================================================

ORDER OF PRECEDENCE (FROM HIGHEST TO LOWEST):

1. POINT OF PERSONAL PRIVILEGE
   - Interrupts speaker? YES (Audibility only)
   - Vote required: NONE (Chair's immediate ruling)
   - Script: "Point of Personal Privilege: Delegate cannot hear the speaker."

2. MOTION TO SUSPEND THE MEETING
   - Interrupts speaker? NO
   - Vote required: Simple Majority (50% + 1)
   - Script: "Motion to suspend the meeting for lunch until 14:00."

3. MOTION TO ADJOURN THE MEETING
   - Interrupts speaker? NO
   - Vote required: Simple Majority (50% + 1)
   - Script: "Motion to adjourn the meeting until the 2027 conference."

4. MOTION TO TABLE / POSTPONE DEBATE
   - Interrupts speaker? NO
   - Vote required: Two-Thirds Majority (66.7%) | 2 speakers for / 2 against

5. MOTION TO CLOSE DEBATE
   - Interrupts speaker? NO
   - Vote required: Two-Thirds Majority (66.7%) | 2 speakers against only
   - Consequence: Moves room immediately to locked Voting Procedure!

6. POINT OF ORDER
   - Interrupts speaker? NO
   - Vote required: NONE (Chair's immediate ruling)
   - Script: "Point of Order: Chair applied simple majority instead of two-thirds."

7. POINT OF PARLIAMENTARY INQUIRY
   - Interrupts speaker? NO
   - Vote required: NONE
   - Script: "Point of Parliamentary Inquiry: Are yields currently in order?"

8. MOTION FOR AN UNMODERATED CAUCUS
   - Interrupts speaker? NO
   - Vote required: Simple Majority
   - Script: "Motion for an unmoderated caucus for 15 minutes."

9. MOTION FOR A MODERATED CAUCUS
   - Interrupts speaker? NO
   - Vote required: Simple Majority
   - Script: "Motion for a moderated caucus: 9 minutes total, 45 seconds individual speaking time, on [Topic]."

10. POINT OF INFORMATION (POI)
    - Interrupts speaker? NO
    - Script: "Is the delegate aware that..." (only if speaker yields to POIs).

VOTING THRESHOLDS CHEAT SHEET:
- Simple Majority: 50% of present members + 1 (abstentions count as non-votes)
- Two-Thirds Majority: 66.7% of votes cast in affirmative vs negative
- Present and Voting: Surrendered right to abstain on draft resolutions!

CONTACT HEAD DELEGATES IN EMERGENCY:
Abdul Rafay: +92 323 8874600 | Abdul Rehman: +92 314 3882579 | Musa Adnan: +92 313 7369696
`
  },
  {
    id: 'doc-crisis-kit',
    title: 'Crisis Committee Directives & Communiqué Action Kit',
    category: 'Crisis Kit',
    format: 'DOCX / TXT',
    fileSize: '340 KB',
    pages: 8,
    description: 'Complete crisis toolkit: Personal Backroom note formats, Joint Directives, Press Communiqués, Portfolio Power exploitation templates, and trial defense briefs.',
    recommendedFor: 'Continuous Crisis Committees, Historical Cabinets & JCCs',
    downloadFileName: 'Crisis_Committee_Directives_and_Backroom_Kit.txt',
    highlights: [
      'Joint Directive formal template (Title, Assets, Action Plan, Signatories)',
      'Personal Directive 3-phase template (Intel -> Covert Transport -> Strike)',
      'Official Press Release & Media Communiqué format',
      'Trial by Cabinet Court procedural script'
    ],
    content: `================================================================================
CRISIS COMMITTEE DIRECTIVES & TACTICAL ACTION KIT
CURATED BY HD MUSA ADNAN
================================================================================

SECTION 1: JOINT DIRECTIVE TEMPLATE (Voted on by Cabinet)

DIRECTIVE TITLE: Operation Iron Aegis
COMMITTEE: Cabinet of the Republic of Korea, 1998
SPONSORS: Minister of National Defense, Director of National Intelligence
SIGNATORIES: Minister of Foreign Affairs, Minister of Finance

CLAUSE 1: RECONNAISSANCE & DEPLOYMENT
Authorize the immediate dispatch of the 3rd Naval Flotilla to maritime coordinates
37°14'N 131°52'E with orders to maintain an active sonar screen and intercept
unregistered merchant vessels.

CLAUSE 2: FINANCIAL ALLOCATION
Draw the sum of $45,000,000 USD from the Ministry of Finance Emergency Reserve
Credit line to provision radar countermeasures and fuel reserves.

CLAUSE 3: DIPLOMATIC COMMUNICATION
Instruct the Foreign Ministry to issue an immediate diplomatic cable through the
Swiss embassy requesting direct bilateral verification channels.

--------------------------------------------------------------------------------
SECTION 2: PERSONAL DIRECTIVE FORMAT (Backroom Note)

TO: The Crisis Backroom / God
FROM: Minister of State Security
SUBJECT: Operation Midnight Ghost (Personal Directive #3)

OBJECTIVE:
Wiretap the private communications suite of the opposing defense minister and
secure evidence of illegal offshore financial transactions.

ASSETS COMMITTED:
- 2 undercover operatives from Department 4 (Black Operations)
- $250,000 in untraceable bearer bonds from personal slush fund
- Safehouse #4 in Geneva

EXECUTION TIMELINE:
1. Phase 1 (00:00 - 02:00): Operatives enter building disguised as telecom engineers.
2. Phase 2 (02:00 - 03:00): Splice into primary fiber trunk in basement junction box.
3. Phase 3: Transmit raw audio feeds directly to my private frequency (144.8 MHz).

ESCAPE PROTOCOL:
If compromised, operatives destroy hardware with thermite and utilize Swedish passports.
`
  },
  {
    id: 'doc-voting-tally',
    title: 'Committee Roll Call, Quorum & Voting Tally Sheet',
    category: 'Templates',
    format: 'DOCX / TXT',
    fileSize: '150 KB',
    pages: 3,
    description: 'Official committee management spreadsheet and printed roster for tracking member states, Present vs Present & Voting declarations, and substantive vote tallies.',
    recommendedFor: 'Chairs, Directors, Rapporteur and Head Delegates',
    downloadFileName: 'Committee_Roll_Call_and_Voting_Tally_Sheet.txt',
    highlights: [
      'Alphabetical roster table with status checkboxes',
      'Quorum and majority calculation formulas (Simple, 2/3, Acclamation)',
      'Substantive resolution vote record sheet with Yes, No, Abstain columns',
      'Roll call vote tracking matrix'
    ],
    content: `================================================================================
DIPLOMATIA MUN · COMMITTEE ROLL CALL & VOTING LOG
OFFICIAL DAIS TRACKING RECORD
================================================================================

COMMITTEE: __________________________________________________
TOPIC: ______________________________________________________
CHAIRPERSON: ___________________ DIRECTOR: _________________

QUORUM CALCULATOR:
Total Committee Seats: [ N ]
Quorum (1/3 for debate): [ N / 3 ] = _____
Simple Majority (50% + 1): [ (N / 2) + 1 ] = _____
Two-Thirds Majority (66.7%): [ 2N / 3 ] = _____

ROLL CALL TRACKING:
Country Name               | Present | Present & Voting | Round 1 | Round 2 | Final Vote
---------------------------+---------+------------------+---------+---------+-----------
Afghanistan                | [  ]    | [  ]             | [ ]     | [ ]     |
Albania                    | [  ]    | [  ]             | [ ]     | [ ]     |
Algeria                    | [  ]    | [  ]             | [ ]     | [ ]     |
Argentina                  | [  ]    | [  ]             | [ ]     | [ ]     |
Australia                  | [  ]    | [  ]             | [ ]     | [ ]     |
Brazil                     | [  ]    | [  ]             | [ ]     | [ ]     |
Canada                     | [  ]    | [  ]             | [ ]     | [ ]     |
China (P5)                 | [  ]    | [  ]             | [ ]     | [ ]     |
Egypt                      | [  ]    | [  ]             | [ ]     | [ ]     |
France (P5)                | [  ]    | [  ]             | [ ]     | [ ]     |
Germany                    | [  ]    | [  ]             | [ ]     | [ ]     |
India                      | [  ]    | [  ]             | [ ]     | [ ]     |
Japan                      | [  ]    | [  ]             | [ ]     | [ ]     |
Pakistan                   | [  ]    | [  ]             | [ ]     | [ ]     |
Russian Federation (P5)    | [  ]    | [  ]             | [ ]     | [ ]     |
Saudi Arabia               | [  ]    | [  ]             | [ ]     | [ ]     |
South Africa               | [  ]    | [  ]             | [ ]     | [ ]     |
United Kingdom (P5)        | [  ]    | [  ]             | [ ]     | [ ]     |
United States of America   | [  ]    | [  ]             | [ ]     | [ ]     |

SUMMARY RESULTS:
Yes: _____ | No: _____ | Abstentions: _____
Ruling: [ PASSED ] / [ FAILED ]
Chair Signature: ____________________________________
`
  }
];
