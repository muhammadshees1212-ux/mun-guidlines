import { RuleOfProcedure } from '../types/mun';

export const RULES_OF_PROCEDURE: RuleOfProcedure[] = [
  {
    id: 'rop-quorum',
    ruleNumber: 'RoP 1.1',
    title: 'Quorum & Roll Call Determination',
    category: 'General Debate',
    framework: 'Universal / UNA-USA',
    precedenceRank: 10,
    voteRequired: 'None (Dais Discretion)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Committee cannot commence without a minimum quorum of one-third (or one-half for voting) of member states present.',
    fullExplanation: 'At the start of every session, the Dais calls roll call in alphabetical order. Delegates respond either "Present" or "Present and Voting". Delegates who declare "Present and Voting" surrender their right to abstain on substantive draft resolutions and MUST cast a vote of "Yes" or "No". A simple majority of the total committee roster must be present to conduct substantive voting.',
    verbatimScript: 'The Delegate of [Member State] declares itself "Present" [or "Present and Voting"].',
    chairRuling: '"The Dais recognizes the Delegate of [Member State]. Quorum is set at [Number] member states; simple majority is [Number] votes."',
    commonPitfalls: [
      'Saying "Present and Voting" when you might need to abstain for national foreign policy reasons.',
      'Attempting to change your roll call status mid-session without sending a formal note to the Dais.'
    ],
    tags: ['quorum', 'roll call', 'present and voting', 'abstention', 'opening']
  },
  {
    id: 'rop-gsl',
    ruleNumber: 'RoP 2.1',
    title: 'General Speakers List (GSL)',
    category: 'General Debate',
    framework: 'Universal / UNA-USA',
    precedenceRank: 9,
    voteRequired: 'None (Dais Discretion)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'The default parliamentary continuous debate list used to establish national policy frameworks and broad committee directions.',
    fullExplanation: 'The GSL remains open throughout the committee until debate is formally closed. When no caucuses or motions are active, the committee automatically defaults back to the GSL. Speaking times are established at the start (usually 60 or 90 seconds). Delegates may add their name to the GSL by raising their placard when requested by the Dais or by sending a written page note.',
    verbatimScript: 'The Delegate of [Country] moves to establish the General Speakers List with an individual speaking time of 90 seconds.',
    chairRuling: '"That motion is in order. All those wishing to be added to the General Speakers List, please raise your placards now."',
    commonPitfalls: [
      'Allowing the GSL to lapse: if the speakers list is exhausted with no remaining names, debate on the topic is automatically closed!',
      'Using GSL time for microscopic sub-issues instead of overarching foreign policy objectives.'
    ],
    tags: ['gsl', 'speakers list', 'default debate', 'speaking time']
  },
  {
    id: 'rop-yields',
    ruleNumber: 'RoP 2.4',
    title: 'Yielding Remaining Time on GSL',
    category: 'General Debate',
    framework: 'Universal / UNA-USA',
    precedenceRank: 8,
    voteRequired: 'None (Dais Discretion)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Delegates finishing a GSL speech with unused time must yield remaining time to Points of Information, another Delegate, or the Chair.',
    fullExplanation: 'Delegates cannot yield time if speaking during a Moderated Caucus. Yields only apply to speeches from the General Speakers List. A delegate can yield to: 1) The Chair (ends speech cleanly), 2) Another Delegate (that delegate must accept; cross-yielding is strictly forbidden), or 3) Points of Information (questions from the floor through the Chair; only the answers count against remaining time).',
    verbatimScript: '"With [15 seconds] remaining, the Delegate of [Country] yields the remainder of their time to [Points of Information / the Delegate of Germany / the Chair]."',
    chairRuling: '"The Delegate yields their time to [Delegate/Questions/Chair]. The Chair absorbs the remainder of the time / Floor is now open to questions."',
    commonPitfalls: [
      'Attempting to yield during a Moderated Caucus (yields do not exist in caucuses).',
      'Double yields: Delegate A yields to Delegate B, and Delegate B attempts to yield to Delegate C (forbidden).'
    ],
    tags: ['yield', 'time management', 'gsl', 'questions', 'points of information']
  },
  {
    id: 'rop-mod-caucus',
    ruleNumber: 'RoP 3.1',
    title: 'Motion for a Moderated Caucus',
    category: 'Caucuses',
    framework: 'Universal / UNA-USA',
    precedenceRank: 6,
    voteRequired: 'Simple Majority (50% + 1)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Suspends the GSL for focused debate on a specific sub-topic, with custom total duration and individual speaking times.',
    fullExplanation: 'The Moderated Caucus is the core engine of debate. The proposing delegate must specify: 1) Total caucus time, 2) Individual speaking time, and 3) A distinct substantive topic. Mathematical requirement: Total time in seconds divided by individual speaking time must yield a clean integer of speakers (e.g. 9 minutes [540s] / 45s = 12 speakers). The proposing delegate is traditionally given the choice of speaking first or last.',
    verbatimScript: '"The Delegate of [Country] moves for a Moderated Caucus of [9] minutes with an individual speaking time of [45] seconds on the topic of: \'Establishing Maritime Verification Corridors in the Red Sea\'."',
    chairRuling: '"The motion is in order and mathematically sound. Those in favor, please raise your placards... motion passes."',
    commonPitfalls: [
      'Proposing times that do not divide evenly (e.g., 10 minutes with 45 seconds).',
      'Vague topics like "Discussion of the topic at hand" — Chairs will rule this unconstructive.'
    ],
    tags: ['moderated caucus', 'caucus', 'sub-topic', 'speaking time', 'motions']
  },
  {
    id: 'rop-mod-extension',
    ruleNumber: 'RoP 3.3',
    title: 'Extension of a Moderated Caucus',
    category: 'Caucuses',
    framework: 'Universal / UNA-USA',
    precedenceRank: 6,
    voteRequired: 'Simple Majority (50% + 1)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Extends an active moderated caucus on the same topic for a duration not exceeding the original caucus length (usually max 50%).',
    fullExplanation: 'When high-value debate is ongoing and delegates need more speaking turns on the exact same sub-topic, a delegate can move to extend the caucus immediately upon expiration. Standard parliamentary rule: The extension cannot exceed the original total time, and most Dais conventions restrict extensions to no more than half the original time (e.g., 5-minute extension on a 10-minute caucus).',
    verbatimScript: '"The Delegate of [Country] moves to extend the current Moderated Caucus by [4] minutes with the same individual speaking time of [45] seconds."',
    chairRuling: '"The motion to extend is recognized. We will move directly to a procedural vote."',
    commonPitfalls: [
      'Attempting to change the individual speaking time or the topic during an extension.',
      'Proposing an extension longer than the original caucus duration.'
    ],
    tags: ['extension', 'moderated caucus', 'speaking time']
  },
  {
    id: 'rop-unmod-caucus',
    ruleNumber: 'RoP 4.1',
    title: 'Motion for an Unmoderated Caucus',
    category: 'Caucuses',
    framework: 'Universal / UNA-USA',
    precedenceRank: 5,
    voteRequired: 'Simple Majority (50% + 1)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Suspends formal rules of procedure to permit informal face-to-face negotiations, bloc meetings, and resolution drafting.',
    fullExplanation: 'During an Unmoderated Caucus, delegates are free to leave their designated seats, converse directly without Dais moderation, form regional or ideological blocs, and draft working papers. Most conferences place a ceiling of 20 to 30 minutes on any single unmoderated caucus. Unmoderated caucuses take procedural precedence over moderated caucuses if their duration is longer, or according to Dais standing orders.',
    verbatimScript: '"The Delegate of [Country] moves for an Unmoderated Caucus for a duration of [15] minutes for the purpose of bloc consolidation and working paper drafting."',
    chairRuling: '"That motion is in order. All those in favor of a 15-minute unmoderated caucus, please raise your placards... The motion passes. Delegates, you may unpin placards and begin consultations."',
    commonPitfalls: [
      'Moving for an unmoderated caucus too early in committee before delegate foreign policies have been established on the GSL.',
      'Failing to specify the concrete purpose (e.g. "bloc consolidation", "merging draft resolutions").'
    ],
    tags: ['unmoderated caucus', 'unmod', 'informal consultation', 'blocs', 'drafting']
  },
  {
    id: 'rop-pop-privilege',
    ruleNumber: 'RoP 5.1',
    title: 'Point of Personal Privilege',
    category: 'Points & Inquiries',
    framework: 'Universal / UNA-USA',
    precedenceRank: 1,
    voteRequired: 'None (Dais Discretion)',
    interruptsSpeaker: true,
    debatable: false,
    summary: 'Raised when a physical condition impairs a delegate\'s participation (e.g. inaudibility, room temperature, AV failure). Can interrupt a speaker ONLY for audibility.',
    fullExplanation: 'Point of Personal Privilege holds the highest precedence among all parliamentary points. It is the ONLY point that may interrupt a speaker while they are speaking, and strictly only if the delegate cannot hear or understand the speaker (inaudibility). For non-audibility concerns (e.g. room too cold, need to step out), delegates should wait until the speaker yields or send a note to the Dais.',
    verbatimScript: '"Point of Personal Privilege: Delegate of [Country] requests the speaker to speak up / into the microphone, as the rear bench cannot hear."',
    chairRuling: '"Point is well-taken. Speaker, please address the microphone and increase your volume."',
    commonPitfalls: [
      'Interrupting a speaker for trivial personal issues like restroom visits or room temperature.',
      'Using Point of Personal Privilege to debate a substantive falsehood (that is a Point of Order or Right of Reply).'
    ],
    tags: ['personal privilege', 'audibility', 'highest precedence', 'interrupt']
  },
  {
    id: 'rop-point-of-order',
    ruleNumber: 'RoP 5.2',
    title: 'Point of Order',
    category: 'Points & Inquiries',
    framework: 'Universal / UNA-USA',
    precedenceRank: 2,
    voteRequired: 'None (Dais Discretion)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Raised immediately when the Chair or another delegate commits a procedural infraction violating the adopted Rules of Procedure.',
    fullExplanation: 'Point of Order serves as the delegate\'s watchdog over parliamentary integrity. It must be raised immediately after the procedural error occurs. It cannot be used to dispute substantive facts, policy arguments, or historical accuracy. Example valid uses: Chair accepted an illegal motion, Chair omitted a speaker from the list, incorrect voting threshold applied.',
    verbatimScript: '"Point of Order: Delegate of [Country] notes that a two-thirds majority was required under Rule 17 for the Motion to Close Debate, but only a simple majority was recorded."',
    chairRuling: '"The Chair recognizes the error. The Point of Order is well-taken. The committee will reconduct the vote under the two-thirds threshold."',
    commonPitfalls: [
      'Calling a Point of Order because another delegate lied or misstated historical facts (points of order are strictly procedural, not substantive).',
      'Failing to raise it immediately when the infraction happens.'
    ],
    tags: ['point of order', 'procedural error', 'rules violation', 'dais check']
  },
  {
    id: 'rop-parliamentary-inquiry',
    ruleNumber: 'RoP 5.3',
    title: 'Point of Parliamentary Inquiry',
    category: 'Points & Inquiries',
    framework: 'Universal / UNA-USA',
    precedenceRank: 3,
    voteRequired: 'None (Dais Discretion)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'A direct question to the Dais regarding the current parliamentary status, upcoming procedure, or interpretation of rules.',
    fullExplanation: 'Delegates raise this point when they are unsure of what motion to propose, what threshold applies, or how much time remains on the agenda. It is directed solely to the Dais, never to another delegate. It cannot interrupt a speaker and must be raised between speeches when the floor is open.',
    verbatimScript: '"Point of Parliamentary Inquiry: Could the Dais clarify whether the committee is currently in formal debate or an extended moderated caucus?"',
    chairRuling: '"The committee has returned to the General Speakers List with 3 speakers remaining. The floor is open to motions."',
    commonPitfalls: [
      'Asking the Chair substantive questions about foreign policy or country positions.',
      'Interrupting a delegate\'s live speech.'
    ],
    tags: ['parliamentary inquiry', 'chair question', 'procedure help', 'dais']
  },
  {
    id: 'rop-point-of-information',
    ruleNumber: 'RoP 5.4',
    title: 'Point of Information (POI)',
    category: 'Points & Inquiries',
    framework: 'THIMUN',
    precedenceRank: 4,
    voteRequired: 'None (Dais Discretion)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'A substantive question directed to a speaker who has yielded time to questions, or raised in THIMUN procedure after a policy address.',
    fullExplanation: 'In THIMUN procedure, POIs are the primary method of direct interrogation. In UNA-USA, POIs can only occur if the speaker on the GSL formally yielded their remaining time to points of information. Questions must be concise, substantive, and framed diplomatically. Speeches disguised as questions are ruled out of order by the Chair.',
    verbatimScript: '"Is the distinguished delegate of [Country] aware that their proposed embargo contradicts Article 41 of the UN Charter?"',
    chairRuling: '"The speaker may answer the question. Only the speaker\'s response will count against the remaining clock."',
    commonPitfalls: [
      'Giving a 45-second speech instead of asking a direct, single question.',
      'Attempting follow-up questions without obtaining explicit permission from the Dais.'
    ],
    tags: ['poi', 'point of information', 'thimun', 'questions', 'substantive']
  },
  {
    id: 'rop-right-of-reply',
    ruleNumber: 'RoP 5.5',
    title: 'Right of Reply',
    category: 'Points & Inquiries',
    framework: 'Universal / UNA-USA',
    precedenceRank: 7,
    voteRequired: 'None (Dais Discretion)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Granted by the Chair when a delegate\'s national sovereignty or personal integrity has been directly and severely impugned by another speaker.',
    fullExplanation: 'A Right of Reply is not granted for ordinary political disagreements or policy critiques. It requires a direct slander or severe accusation against a country\'s head of state, dignity, or national integrity. Standard practice requires submitting a written note explaining the grievance to the Dais. If granted, the delegate receives 30 to 60 seconds to speak; there can be no Right of Reply to a Right of Reply.',
    verbatimScript: '"The Delegate of [Country] respectfully requests a Right of Reply pursuant to Rule 5.5, as the previous speaker characterized our national government as a rogue terrorist regime."',
    chairRuling: '"The Chair has reviewed the request. The Delegate of [Country] is granted 45 seconds for a Right of Reply. Please take the floor."',
    commonPitfalls: [
      'Requesting a Right of Reply over legitimate policy criticism (e.g. "We disagree with your climate policy").',
      'Attempting to reply to a Right of Reply (strictly forbidden).'
    ],
    tags: ['right of reply', 'sovereignty', 'slander', 'national dignity']
  },
  {
    id: 'rop-intro-working-paper',
    ruleNumber: 'RoP 6.1',
    title: 'Introduction of a Working Paper',
    category: 'Draft Resolutions & Amendments',
    framework: 'Universal / UNA-USA',
    precedenceRank: 8,
    voteRequired: 'None (Dais Discretion)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Presents an informal draft document to the committee after it has been reviewed and stamped by the Dais.',
    fullExplanation: 'A Working Paper represents the nascent stage of a resolution. It does not require formal preambulatory or operative clause numbering, though doing so is best practice. Once submitted to the Dais and distributed to delegates, a delegate moves to introduce it. Sponsors are often invited to present the key pillars in a short presentation.',
    verbatimScript: '"The Delegate of [Country] moves to introduce Working Paper 1.1 on behalf of the sponsoring bloc."',
    chairRuling: '"That motion is in order. Working Paper 1.1 has been distributed. The sponsors will have 3 minutes to present the core pillars."',
    commonPitfalls: [
      'Referring to a working paper as a "Draft Resolution" before it has official signatories and Dais approval.',
      'Moving to vote on a working paper (working papers are never voted upon!).'
    ],
    tags: ['working paper', 'drafting', 'introduction', 'bloc ideas']
  },
  {
    id: 'rop-intro-draft-resolution',
    ruleNumber: 'RoP 6.2',
    title: 'Introduction of a Draft Resolution',
    category: 'Draft Resolutions & Amendments',
    framework: 'Universal / UNA-USA',
    precedenceRank: 7,
    voteRequired: 'None (Dais Discretion)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Formally introduces a stamped Draft Resolution containing approved Sponsors and Signatories for committee debate and amendments.',
    fullExplanation: 'A Draft Resolution requires a minimum quota of Sponsors (authors committed to defending the paper) and Signatories (delegates who wish to see the paper debated, regardless of whether they agree with all content). Once approved by the Dais (Director / Chair), a delegate moves to introduce it. Usually, sponsors read operative clauses or answer non-substantive questions.',
    verbatimScript: '"The Delegate of [Country] moves to introduce Draft Resolution 1.1 with [4] sponsors and [12] signatories."',
    chairRuling: '"The motion is recognized. Draft Resolution 1.1 has been approved by the Secretariat. Sponsors, please proceed to the podium for the 5-minute presentation and Q&A period."',
    commonPitfalls: [
      'Assuming that being a signatory means you endorse the resolution (signatories only approve having the paper discussed).',
      'Exceeding sponsor limits set by the Dais.'
    ],
    tags: ['draft resolution', 'sponsors', 'signatories', 'introduction', 'formal paper']
  },
  {
    id: 'rop-friendly-amendment',
    ruleNumber: 'RoP 6.4',
    title: 'Friendly Amendments',
    category: 'Draft Resolutions & Amendments',
    framework: 'Universal / UNA-USA',
    precedenceRank: 6,
    voteRequired: 'None (Unanimous Sponsor Consent)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'A proposed modification, addition, or deletion to a Draft Resolution that is agreed upon by ALL official sponsors without debate.',
    fullExplanation: 'Amendments modify existing operative clauses, add new ones, or strike clauses. If ALL sponsors of the draft resolution sign off in agreement with the proposed amendment, it is deemed "Friendly". The Chair automatically incorporates it into the official text without requiring a committee vote.',
    verbatimScript: '"The Delegate of [Country] submits a Friendly Amendment to Operative Clause 4, signed and approved by all four sponsors of Draft Resolution 1.1."',
    chairRuling: '"The Dais confirms unanimous approval by all sponsors. The amendment is deemed friendly and is hereby incorporated into Draft Resolution 1.1 without vote."',
    commonPitfalls: [
      'Submitting a friendly amendment when one sponsor refuses to sign (it immediately becomes an Unfriendly Amendment!).',
      'Attempting to amend preambulatory clauses (standard RoP prohibits amending preambulatory clauses).'
    ],
    tags: ['friendly amendment', 'sponsors consent', 'clauses', 'automatic incorporation']
  },
  {
    id: 'rop-unfriendly-amendment',
    ruleNumber: 'RoP 6.5',
    title: 'Unfriendly Amendments',
    category: 'Draft Resolutions & Amendments',
    framework: 'Universal / UNA-USA',
    precedenceRank: 5,
    voteRequired: 'Simple Majority (50% + 1)',
    interruptsSpeaker: false,
    debatable: true,
    summary: 'A proposed modification to a Draft Resolution that lacks the consensus of all sponsors; requires formal debate and a substantive vote.',
    fullExplanation: 'When one or more sponsors object to an amendment, it becomes Unfriendly. It requires the minimum required signatory threshold (usually 1/8 of the committee). The committee must hold a mini-debate (usually two speakers in favor and two speakers against) followed by a substantive vote. If passed, the amendment is integrated; if failed, the resolution remains unchanged.',
    verbatimScript: '"The Delegate of [Country] moves to introduce Unfriendly Amendment A to Draft Resolution 1.2, having secured the required [6] signatories."',
    chairRuling: '"The amendment has required signatories and is deemed unfriendly. We will hear two speakers in favor and two speakers against, followed by a simple majority procedural vote."',
    commonPitfalls: [
      'Introducing unfriendly amendments without having submitted the formal text to the Chair first.',
      'Assuming sponsors get a veto over unfriendly amendments (the entire committee votes!).'
    ],
    tags: ['unfriendly amendment', 'debate', 'voting', 'contested clauses']
  },
  {
    id: 'rop-close-debate',
    ruleNumber: 'RoP 7.1',
    title: 'Motion to Close Debate',
    category: 'Procedural Motions',
    framework: 'Universal / UNA-USA',
    precedenceRank: 4,
    voteRequired: 'Two-Thirds Majority (66.7%)',
    interruptsSpeaker: false,
    debatable: true,
    summary: 'Terminates all discussion on the topic and moves the committee directly into formal, locked Voting Procedure.',
    fullExplanation: 'This is a serious procedural motion that concludes the committee session\'s work on a topic. Because it silences any further debate, parliamentary rules require two speakers AGAINST the motion (no speakers in favor) and a high two-thirds supermajority threshold to pass. If it passes, the room enters voting procedure: doors are locked, observers silenced, and note-passing suspended.',
    verbatimScript: '"The Delegate of [Country] moves to Close Debate on Topic A and transition immediately into Voting Procedure on all introduced Draft Resolutions."',
    chairRuling: '"The motion to close debate is in order. It requires two speakers against and a two-thirds majority vote. Are there any delegates wishing to speak against closing debate?"',
    commonPitfalls: [
      'Assuming it only takes a simple majority (it requires 2/3 supermajority in almost all standard RoPs).',
      'Moving to close debate before all draft resolutions have been adequately debated and amended.'
    ],
    tags: ['close debate', 'voting procedure', 'two thirds', 'lock doors']
  },
  {
    id: 'rop-division-of-question',
    ruleNumber: 'RoP 7.3',
    title: 'Motion for Division of the Question',
    category: 'Voting Procedure',
    framework: 'Universal / UNA-USA',
    precedenceRank: 3,
    voteRequired: 'Simple Majority (50% + 1)',
    interruptsSpeaker: false,
    debatable: true,
    summary: 'Divides a Draft Resolution into separate parts or clauses to be voted upon independently rather than as a single omnibus package.',
    fullExplanation: 'If a resolution contains controversial clauses (e.g. sanctions or military intervention) that might cause the entire paper to fail, a delegate can move to divide the question. The delegate specifies which clauses to vote on separately. Two speakers in favor and two against are heard. If the motion passes, the separated clauses are voted on first; any passed clauses are reassembled into the final resolution.',
    verbatimScript: '"The Delegate of [Country] moves for a Division of the Question on Draft Resolution 1.1, specifically separating Operative Clauses 7 and 8 for an independent substantive vote."',
    chairRuling: '"The motion is in order. We will recognize two speakers in favor of dividing the question and two speakers against."',
    commonPitfalls: [
      'Attempting to divide preambulatory clauses (only operative clauses can be divided).',
      'If all operative clauses fail during division, the entire resolution is deemed failed without a final vote.'
    ],
    tags: ['division of question', 'voting', 'controversial clauses', 'independent vote']
  },
  {
    id: 'rop-roll-call-vote',
    ruleNumber: 'RoP 7.5',
    title: 'Motion for a Roll Call Vote',
    category: 'Voting Procedure',
    framework: 'Universal / UNA-USA',
    precedenceRank: 2,
    voteRequired: 'None (Automatic upon Request or 1/5th Support)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Replaces standard placard counting with a recorded, alphabetical roll call vote where each member state audibly declares their position.',
    fullExplanation: 'In high-stakes or contentious votes, delegates demand transparency. Any delegate may move for a Roll Call Vote before voting commences. During the roll call, delegates can respond: "Yes", "No", "Abstain", "Pass" (skips turn until end of first round), or "Yes with Rights" / "No with Rights" (allows a 30-second speech if the vote contradicts declared national policy).',
    verbatimScript: '"The Delegate of [Country] respectfully moves for a Roll Call Vote on Draft Resolution 1.1."',
    chairRuling: '"The motion for a roll call vote is recognized. The Secretariat will conduct the roll call in alphabetical order. Delegates, please answer clearly."',
    commonPitfalls: [
      'Delegates who declared "Present and Voting" at roll call attempting to vote "Abstain" (illegal).',
      'Passing twice: a delegate who says "Pass" in round 1 must vote definitively ("Yes" or "No") in round 2.'
    ],
    tags: ['roll call vote', 'pass', 'with rights', 'transparent voting', 'record']
  },
  {
    id: 'rop-voting-acclamation',
    ruleNumber: 'RoP 7.6',
    title: 'Voting by Acclamation (Consensus)',
    category: 'Voting Procedure',
    framework: 'THIMUN',
    precedenceRank: 2,
    voteRequired: 'Consensus / Acclamation',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'The Chair asks if there are any objections to adopting the resolution. If no objections are raised, the paper is adopted by consensus.',
    fullExplanation: 'Derived from genuine UN General Assembly consensus practices, Voting by Acclamation streamlines non-contentious or broadly praised resolutions. If a single delegation shouts "Objection!", voting by acclamation immediately collapses, and the committee must proceed to a standard placard or roll call vote.',
    verbatimScript: '"The Delegate of [Country] moves that Draft Resolution 1.3 be adopted by Acclamation."',
    chairRuling: '"Are there any objections to adopting Draft Resolution 1.3 by acclamation? [Pause] Seeing none, Draft Resolution 1.3 passes by consensus to loud applause."',
    commonPitfalls: [
      'Attempting acclamation on deeply polarized crisis directives or contentious UNSC resolutions.',
      'Shouting "Objection" if you agree with the resolution (even a single objection forces a recorded vote).'
    ],
    tags: ['acclamation', 'consensus', 'thimun', 'unanimous']
  },
  {
    id: 'rop-table-topic',
    ruleNumber: 'RoP 8.1',
    title: 'Motion to Table / Postpone Debate',
    category: 'Procedural Motions',
    framework: 'Universal / UNA-USA',
    precedenceRank: 5,
    voteRequired: 'Two-Thirds Majority (66.7%)',
    interruptsSpeaker: false,
    debatable: true,
    summary: 'Suspends consideration of the current topic indefinitely or until a later session, allowing the committee to take up another agenda item.',
    fullExplanation: 'Tabling debate is utilized when committee progress is hopelessly deadlocked or when an urgent crisis breaks that supersedes regular business. Requires two speakers in favor, two against, and a two-thirds majority vote. A tabled topic can only be resumed via a "Motion to Reconsider Tabled Topic".',
    verbatimScript: '"The Delegate of [Country] moves to Table Debate on Topic 1 in order to address the immediate emergency agenda item."',
    chairRuling: '"The motion to table requires two speakers in favor and two against, followed by a two-thirds majority."',
    commonPitfalls: [
      'Using tabling as an easy way to kill a draft resolution without voting on it.',
      'Confusing tabling debate with suspending the meeting.'
    ],
    tags: ['table topic', 'postpone debate', 'two thirds', 'stalemate']
  },
  {
    id: 'rop-suspend-meeting',
    ruleNumber: 'RoP 8.2',
    title: 'Motion to Suspend the Meeting',
    category: 'Procedural Motions',
    framework: 'Universal / UNA-USA',
    precedenceRank: 1,
    voteRequired: 'Simple Majority (50% + 1)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Pauses committee session for lunch, dinner, committee socials, or overnight break. Takes precedence over all procedural motions.',
    fullExplanation: 'A Motion to Suspend Debate halts all formal business until a designated future time announced by the Secretariat. Unlike an adjournment, suspension keeps the current agenda and speakers list intact for resumption. It is non-debatable and must be voted on immediately.',
    verbatimScript: '"The Delegate of [Country] moves to Suspend the Meeting until 14:00 hours for the scheduled lunch recess."',
    chairRuling: '"The motion to suspend takes precedence. All those in favor of suspending until 14:00, please raise your placards... The meeting stands suspended."',
    commonPitfalls: [
      'Saying "Adjourn the meeting" when you mean "Suspend for lunch" (adjourn officially dissolves the entire conference!).'
    ],
    tags: ['suspend meeting', 'recess', 'lunch', 'break', 'high precedence']
  },
  {
    id: 'rop-appeal-chair',
    ruleNumber: 'RoP 8.4',
    title: 'Appeal the Decision of the Chair',
    category: 'Procedural Motions',
    framework: 'Universal / UNA-USA',
    precedenceRank: 3,
    voteRequired: 'Two-Thirds Majority (66.7%)',
    interruptsSpeaker: false,
    debatable: true,
    summary: 'Challenges a controversial procedural ruling made by the Dais; the committee votes on whether to uphold or overturn the Chair\'s decision.',
    fullExplanation: 'An Appeal is a nuclear procedural option invoked when a Dais rules against clear, written RoP rules. The appealing delegate speaks for 1 minute outlining the grievance, followed by the Chair\'s defense. Standard UN rule: The vote is on the question: "Shall the decision of the Chair be sustained?" A two-thirds majority against the Chair is required to overturn the ruling.',
    verbatimScript: '"The Delegate of [Country] respectfully appeals the decision of the Chair under Rule 8.4 regarding the rejection of our Unfriendly Amendment."',
    chairRuling: '"The appeal is noted. The Delegate will have 60 seconds to state their grounds, followed by the Chair\'s statement. A two-thirds vote is needed to overturn."',
    commonPitfalls: [
      'Appealing subjective Dais judgment calls (e.g. who got picked to speak).',
      'Antagonizing the Executive Board without unambiguous written rule proof.'
    ],
    tags: ['appeal chair', 'dais challenge', 'overturn', 'procedural rights']
  },
  {
    id: 'rop-crisis-directive',
    ruleNumber: 'RoP 9.1',
    title: 'Crisis Directives & Orders in Council',
    category: 'Crisis & Directives',
    framework: 'Crisis Committee',
    precedenceRank: 4,
    voteRequired: 'Simple Majority (50% + 1)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Rapid actionable executive commands passed in continuous crisis committees to mobilize troops, enact cyber actions, or deploy state resources.',
    fullExplanation: 'Crisis Directives replace formal 10-page draft resolutions with focused tactical orders. Joint Directives require simple majority approval by the committee cabinet. Directives must contain: 1) Concrete operational title, 2) Specific assets committed, 3) Implementation timeline, and 4) Chain of command. Directives are passed rapidly during unmoderated or moderated caucuses.',
    verbatimScript: '"The Delegate of [Country] moves to introduce and immediately vote on Directive \'Operation Iron Aegis\'."',
    chairRuling: '"Directive \'Operation Iron Aegis\' is accepted by the Dais. We will move to an immediate timed vote of all cabinet ministers."',
    commonPitfalls: [
      'Writing vague directives without assigning specific units, assets, or budgets.',
      'Relying on state resources your character\'s portfolio does not possess.'
    ],
    tags: ['crisis', 'directive', 'continuous crisis', 'tactical orders', 'cabinet']
  },
  {
    id: 'rop-personal-directive',
    ruleNumber: 'RoP 9.2',
    title: 'Personal Directives & Backroom Notes',
    category: 'Crisis & Directives',
    framework: 'Crisis Committee',
    precedenceRank: 10,
    voteRequired: 'None (Crisis Director / Backroom Approval)',
    interruptsSpeaker: false,
    debatable: false,
    summary: 'Secret portfolio orders sent directly to the Backroom via crisis runners to conduct covert ops, intelligence gathering, or private empire building.',
    fullExplanation: 'In Crisis committees, delegates act as individual historical or contemporary figures with unique portfolio powers (e.g., Minister of Finance controls treasury, Minister of Defense controls armed divisions). Personal directives are strictly confidential and do not require cabinet knowledge or voting. Success or failure is revealed via Backroom crisis updates.',
    verbatimScript: '[Written note to Backroom]: "Directive from Minister of Defense: Divert 3 reconnaissance drones to sector 7B under radio silence."',
    chairRuling: '"The Backroom runner has delivered the dossier. The Crisis Director has stamped the directive \'Under Evaluation\'."',
    commonPitfalls: [
      'Sending god-moding notes ("I launch 500 nukes and defeat all enemies") which backroom immediately punishes.',
      'Failing to lay multi-stage groundwork (intel -> logistics -> execution).'
    ],
    tags: ['personal directive', 'backroom', 'secret notes', 'portfolio powers']
  }
];
