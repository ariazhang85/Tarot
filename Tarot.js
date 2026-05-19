// === DECK DATA ===
const tarotDeck = [
  "The Fool","The Magician","The High Priestess","The Empress","The Emperor",
  "The Hierophant","The Lovers","The Chariot","Strength","The Hermit",
  "Wheel of Fortune","Justice","The Hanged Man","Death","Temperance",
  "The Devil","The Tower","The Star","The Moon","The Sun","Judgement","The World",
  "Ace of Wands","Two of Wands","Three of Wands","Four of Wands","Five of Wands",
  "Six of Wands","Seven of Wands","Eight of Wands","Nine of Wands","Ten of Wands",
  "Page of Wands","Knight of Wands","Queen of Wands","King of Wands",
  "Ace of Cups","Two of Cups","Three of Cups","Four of Cups","Five of Cups",
  "Six of Cups","Seven of Cups","Eight of Cups","Nine of Cups","Ten of Cups",
  "Page of Cups","Knight of Cups","Queen of Cups","King of Cups",
  "Ace of Swords","Two of Swords","Three of Swords","Four of Swords","Five of Swords",
  "Six of Swords","Seven of Swords","Eight of Swords","Nine of Swords","Ten of Swords",
  "Page of Swords","Knight of Swords","Queen of Swords","King of Swords",
  "Ace of Pentacles","Two of Pentacles","Three of Pentacles","Four of Pentacles","Five of Pentacles",
  "Six of Pentacles","Seven of Pentacles","Eight of Pentacles","Nine of Pentacles","Ten of Pentacles",
  "Page of Pentacles","Knight of Pentacles","Queen of Pentacles","King of Pentacles"
];

const positions = [
  "Past · A History",
  "Present · Current Energy",
  "Future · Upcoming"
];

// === MEANINGS DATA ===
const meanings = {
  "Past · A History": {
    // MAJOR ARCANA
    "The Fool": "You stood at a crossroads, full of restless energy and a longing for something new. A leap of faith — perhaps unplanned — set everything in motion. The root of where you are now lies in that moment of brave, wide-eyed beginnings.",
    "The Magician": "You once had everything you needed to succeed — the tools, the talent, the willpower. The root of your current situation lies in how you chose to use, or perhaps underuse, those gifts.",
    "The High Priestess": "Something was left unspoken. A truth you sensed but didn't act on, a quiet inner voice you may have ignored. The root of your situation lies in that space between knowing and doing.",
    "The Empress": "A season of abundance and creativity shaped where you are today. Whether it was a nurturing relationship, a creative pursuit, or a time of deep personal growth — that fertile period planted the seeds of your present.",
    "The Emperor": "Structure, authority, and a need for control have played a significant role in your story. The root lies in how power — yours or someone else's — shaped the foundation you're standing on.",
    "The Hierophant": "Tradition, belief systems, or the expectations of others have quietly steered your path. The root of your situation may lie in following — or resisting — what you were taught was the 'right' way.",
    "The Lovers": "A choice about love or values lies at the heart of this. Whether it was a relationship, a deeply personal decision, or a fork in the road of the heart — that choice echoes into your present.",
    "The Chariot": "You fought hard to get somewhere. Determination and sheer willpower drove you forward, but the tension of that struggle — of pushing through opposition — is the root energy you're carrying now.",
    "Strength": "You have faced something difficult before, and you endured. The quiet courage you showed — perhaps without anyone even noticing — is the foundation beneath your feet right now.",
    "The Hermit": "A period of solitude, withdrawal, or searching shaped you deeply. Whether chosen or forced, that time alone with your thoughts planted the seed of where you find yourself today.",
    "Wheel of Fortune": "Fate intervened. Something shifted — a lucky break, an unexpected loss, a twist of circumstance — and that turning of the wheel set the current chapter in motion.",
    "Justice": "A decision was made, a consequence unfolded, or a truth came to light. The root of your situation lies in the natural cause and effect of choices — yours or someone else's.",
    "The Hanged Man": "A pause. A suspension. Something put your life on hold — willingly or not — and in that stillness, everything began to look different. That shift in perspective is where your current journey began.",
    "Death": "Something ended, and it had to. A relationship, a phase, an old version of yourself. The root of where you are now lies in that transformation — painful perhaps, but necessary.",
    "Temperance": "Balance was either found or lost. A time of careful blending — of patience, healing, and moderation — either brought you peace or revealed how much you craved it.",
    "The Devil": "Something held you captive — a habit, a relationship, a belief that kept you small. The root lies in that pull toward what felt good but cost you something important.",
    "The Tower": "Something unexpected shook your world. A sudden revelation, a collapse of something you thought was solid. That disruption, as painful as it was, is what cracked things open.",
    "The Star": "A period of quiet hope and healing gave you a renewed sense of direction. The root of your journey lies in that moment of looking up after a storm and daring to believe again.",
    "The Moon": "Fear, confusion, or illusion clouded your path at a crucial moment. Things may not have been as they seemed, and navigating that uncertainty is what brought you here.",
    "The Sun": "A time of joy, clarity, and confidence lit up your past. Whether you're still basking in it or looking back on it, that brightness is the energy that set your current path in motion.",
    "Judgement": "A moment of reckoning — a call to rise, to reassess, to answer for or be rewarded by the past. The root lies in that awakening, that sense that something bigger was calling you forward.",
    "The World": "You completed something. A cycle closed, a goal was reached, a chapter ended with a sense of wholeness. That completion is the foundation from which everything now unfolds.",
    // WANDS
    "Ace of Wands": "A spark of inspiration or ambition ignited something in you. That initial burst of creative fire is the root energy behind where you find yourself now.",
    "Two of Wands": "You once stood on the edge of possibility, planning your next move and daring to dream bigger. That vision — and the courage to hold it — is what set things in motion.",
    "Three of Wands": "You put something out into the world and waited for it to return. The foundations you built, the seeds you sent forward, are now beginning to show their results.",
    "Four of Wands": "A celebration, a homecoming, or a moment of hard-earned stability gave you a strong foundation. That joy and sense of belonging is the ground you're growing from.",
    "Five of Wands": "Conflict, competition, or a clash of ideas stirred things up. Whether it was productive friction or chaotic struggle, that tension is woven into where you are now.",
    "Six of Wands": "A victory — recognised and celebrated — gave you momentum. The confidence that came from being seen and acknowledged is a key part of your story.",
    "Seven of Wands": "You stood your ground when others pushed back. That act of defending what you believed in, even when it was hard, is the energy at the root of your current position.",
    "Eight of Wands": "Things moved fast — maybe too fast. A flurry of activity, messages, or change swept through your life, and the pace of that moment is still being felt.",
    "Nine of Wands": "You've been through a lot, and it shows. A history of resilience and hard-won perseverance is the root here — you've kept going even when you were running on empty.",
    "Ten of Wands": "You took on too much, or the weight of responsibility grew heavier than expected. That burden — however well-intentioned — is the root energy shaping your present.",
    "Page of Wands": "A sense of youthful enthusiasm and curiosity sparked something. An idea, an adventure, or a new passion lit a fire that is still burning in the background.",
    "Knight of Wands": "You charged ahead with passion and speed, perhaps without a fully formed plan. That bold, impulsive energy set the wheels in motion for where you are now.",
    "Queen of Wands": "Confidence, warmth, and creative power shaped your path. Whether in you or someone around you, that magnetic, determined energy is at the root of your story.",
    "King of Wands": "Visionary leadership — yours or someone else's — set things in motion. A bold, charismatic force drove decisions that are still echoing into your present.",
    // CUPS
    "Ace of Cups": "A new emotional beginning — a love, a deep connection, or an opening of the heart — is the root of where you find yourself now. Something beautiful was offered, and it changed things.",
    "Two of Cups": "A meaningful connection — romantic or otherwise — formed a bond that shaped your path. That mutual understanding and heart-level recognition is at the root of your story.",
    "Three of Cups": "Joy, friendship, and celebration were at the heart of a pivotal moment. The warmth of community and shared happiness planted seeds that are still growing.",
    "Four of Cups": "A period of withdrawal, boredom, or quiet discontent caused you to look inward. That restless dissatisfaction — though uncomfortable — was the beginning of wanting something more.",
    "Five of Cups": "Loss, disappointment, or grief left a mark. The root of your present lies in something that didn't go as hoped — and in how you chose to grieve and eventually move forward.",
    "Six of Cups": "Nostalgia, innocence, or the past plays a role here. A memory, an old connection, or a longing for simpler times is woven into the foundation of your current situation.",
    "Seven of Cups": "Dreams, fantasies, and too many choices created confusion. The root lies in a moment of being overwhelmed by possibility — or perhaps seduced by illusion.",
    "Eight of Cups": "You walked away from something. Despite what you had built, something felt missing, and you had the courage — or the pain — to leave it behind and search for more.",
    "Nine of Cups": "A wish came true. A period of emotional satisfaction and contentment is the root energy here — you had what you wanted, and that fulfilment shaped what came next.",
    "Ten of Cups": "Deep emotional fulfilment, family, and a sense of lasting happiness formed the backdrop. That vision of a perfect emotional world — real or desired — is at the root of your journey.",
    "Page of Cups": "A sensitive, imaginative, and emotionally open part of you — or someone in your life — sparked something. A creative or emotional message arrived that quietly changed things.",
    "Knight of Cups": "Romance, idealism, and a pursuit of beauty or love drove you forward. That dreamy, heartfelt energy — however impractical — set important things in motion.",
    "Queen of Cups": "Deep empathy and emotional intelligence shaped your path. Whether in you or someone close, that compassionate, intuitive energy is a foundational part of your story.",
    "King of Cups": "Emotional maturity and calm wisdom — either offered or sought — played a key role. A steady, caring presence helped anchor something important in your past.",
    // SWORDS
    "Ace of Swords": "A moment of piercing clarity or a powerful new idea cut through the noise. That truth — however sharp — is the root energy that started this chapter.",
    "Two of Swords": "A decision was avoided, or you found yourself caught between two difficult choices. That stalemate — however uncomfortable — is where your current path began.",
    "Three of Swords": "Heartbreak, betrayal, or grief left a deep impression. The root of where you are lies in that pain — and in the courage it took to carry on regardless.",
    "Four of Swords": "Rest, recovery, or a forced pause gave you time to regroup. That stillness — whether chosen or necessary — is the quiet ground from which your present situation grew.",
    "Five of Swords": "Conflict, defeat, or a hollow victory left things unsettled. The root lies in a situation where not everyone walked away feeling good — including perhaps yourself.",
    "Six of Swords": "A transition — moving away from turbulence toward calmer waters — shaped your path. That journey from difficulty toward something better is the root of where you are now.",
    "Seven of Swords": "Deception, avoidance, or a strategic retreat played a role. Whether you were the one slipping away or the one left behind, that energy is woven into your present.",
    "Eight of Swords": "You felt trapped — by circumstances, by your own thinking, or by others. That sense of restriction, real or perceived, is the root energy behind your current situation.",
    "Nine of Swords": "Anxiety, worry, and sleepless nights marked an important period. The fear and mental anguish you carried — or still carry — is deeply connected to where you find yourself now.",
    "Ten of Swords": "Something ended painfully and completely. A betrayal, a collapse, a rock-bottom moment. But the root of your present also contains the truth that after the ten of swords — the only way is up.",
    "Page of Swords": "Curiosity, quick thinking, and a desire for truth sparked something. A sharp, inquisitive energy — perhaps yours, perhaps someone else's — set the wheels turning.",
    "Knight of Swords": "Fast, fierce, and unstoppable — someone charged ahead without looking back. That rushing, driven energy, however reckless, is the force that launched your current situation.",
    "Queen of Swords": "Clear thinking, independence, and a refusal to be deceived shaped your path. That sharp, perceptive energy — whether in you or around you — is at the root of your story.",
    "King of Swords": "Logic, authority, and a clear-headed approach to a difficult situation played a defining role. That intellectual strength — or the demand for it — is the foundation of where you now stand.",
    // PENTACLES
    "Ace of Pentacles": "A new opportunity in the material world — a job, a financial offer, a practical new beginning — planted the seed of your current situation.",
    "Two of Pentacles": "Juggling competing priorities and finding balance amid change defined an important period. That constant balancing act is the root energy behind where you are now.",
    "Three of Pentacles": "Collaboration, skill, and working toward something meaningful set things in motion. The effort you put into building something real is a key part of your foundation.",
    "Four of Pentacles": "A need for security — perhaps gripping too tightly to what you had — shaped your path. That desire to hold on, to protect, to not lose what was built, is woven into your present.",
    "Five of Pentacles": "A period of hardship, financial struggle, or feeling left out in the cold left its mark. The root of your journey includes that sense of scarcity and the resilience it demanded.",
    "Six of Pentacles": "Generosity, balance in giving and receiving, or a moment of much-needed support shaped things. That flow of resources — in or out — is part of what brought you here.",
    "Seven of Pentacles": "Patience and long-term thinking defined a key period. You planted seeds and waited, assessing whether the effort was worth the reward — and that reflection is still relevant now.",
    "Eight of Pentacles": "Hard work, dedication to craft, and a commitment to doing things well formed the bedrock. That diligent, focused energy is at the root of what you're building now.",
    "Nine of Pentacles": "A period of self-sufficiency, quiet luxury, and earned independence shaped your foundation. That sense of having created something stable and beautiful for yourself is the root here.",
    "Ten of Pentacles": "Legacy, family, and long-term security form the backdrop of your story. The desire for — or the experience of — lasting abundance and rootedness is woven into where you begin.",
    "Page of Pentacles": "A studious, grounded curiosity about the practical world sparked something. A new skill, a learning opportunity, or a down-to-earth new beginning set things in motion.",
    "Knight of Pentacles": "Steady, methodical, and deeply reliable — a slow but sure energy drove things forward. That patient, determined approach is the root of what you're building now.",
    "Queen of Pentacles": "Warmth, practicality, and a nurturing approach to the material world shaped your path. That grounded, generous energy — in you or around you — is a key part of your foundation.",
    "King of Pentacles": "Success, stability, and a masterful approach to the material world played a defining role. That solid, prosperous energy is the ground from which your present situation has grown."
  },

  "Present · Current Energy": {
    // MAJOR ARCANA
    "The Fool": "Right now you are being invited to step into the unknown with an open heart. Something new is calling you, and the energy around you is full of possibility. The question is: will you take the leap, or let fear hold you at the edge?",
    "The Magician": "You have everything you need right now — the skills, the resources, the drive. The present energy is one of empowerment and potential. Trust in your own abilities and take decisive action.",
    "The High Priestess": "The energy right now is one of stillness and deep knowing. Something is being revealed to you — not through logic, but through feeling. Trust your intuition above all else in this moment.",
    "The Empress": "You are in a season of abundance and creativity. The present energy supports growth, nurturing, and allowing good things to blossom. Give yourself permission to receive.",
    "The Emperor": "Structure and stability are what you need — and what you're being called to create — right now. The energy is one of taking charge, setting boundaries, and building something solid.",
    "The Hierophant": "You may be seeking guidance, tradition, or a sense of belonging to something larger than yourself. The present energy invites you to look for wisdom in trusted sources — and to honour your values.",
    "The Lovers": "A significant choice is at the centre of your present moment. Whether it's about love, values, or a path forward, the energy is asking you to lead with your heart and choose with intention.",
    "The Chariot": "You are in a period of determined forward motion. The energy is fierce, focused, and ready to push through any obstacle. Keep your eyes on the goal and don't let anything pull you off course.",
    "Strength": "Right now, your greatest power lies not in force but in quiet courage. The energy of this moment calls for patience, compassion, and the kind of inner strength that doesn't need to shout.",
    "The Hermit": "The present energy is one of withdrawal and reflection. You may be feeling called to step back from the noise and find your own answers. Solitude right now is not loneliness — it is wisdom.",
    "Wheel of Fortune": "Change is happening — or is about to. The present energy is one of turning points and shifting tides. What goes up comes down, and what was stuck is beginning to move. Trust the cycle.",
    "Justice": "The energy right now is about truth, balance, and accountability. A situation is being weighed, and fairness will prevail. Be honest — with yourself and others — and the scales will tip in your favour.",
    "The Hanged Man": "You are in a pause. Things may feel suspended or slow, and that is exactly as it should be. The present energy is asking you to stop pushing and start seeing things from a new angle.",
    "Death": "Something is ending, and the present energy is asking you to let it go. This is not a time to hold on — it is a time to release and make space for what is ready to be born.",
    "Temperance": "The present energy is one of balance, patience, and gentle healing. Things are coming together slowly — and that slowness is the magic. Trust the process and resist the urge to rush.",
    "The Devil": "There is something in your present situation that may have more power over you than you'd like to admit. The energy right now is asking you to look honestly at what binds you — and ask whether you truly want to stay bound.",
    "The Tower": "Something is being shaken loose right now. The present energy may feel disruptive or even chaotic, but what is falling was never as solid as it seemed. Let it fall — what remains will be real.",
    "The Star": "After difficulty, the present energy is one of quiet hope and renewal. Something better is on its way. Allow yourself to believe in it — your faith right now is not naïve, it is powerful.",
    "The Moon": "The present energy is murky and uncertain. Things may not be as they appear, and emotions are running deep. Be careful of illusions, and move slowly until clarity returns.",
    "The Sun": "The present energy is radiant, joyful, and full of life. You are stepping into a moment of clarity, confidence, and well-deserved happiness. Let yourself shine.",
    "Judgement": "You are being called to rise. The present energy is one of awakening — a moment to honestly assess where you've been and make a clear-eyed choice about where you're going.",
    "The World": "You are at or approaching a moment of completion. The present energy is one of wholeness — the sense that something has come full circle and you are exactly where you are meant to be.",
    // WANDS
    "Ace of Wands": "A surge of creative energy and inspiration is available to you right now. Something new wants to be born — an idea, a project, a passion. Now is the moment to strike while the fire is hot.",
    "Two of Wands": "You are standing at a crossroads, weighing your options and daring to imagine a bigger future. The energy right now is one of planning and bold vision — the world is wider than you think.",
    "Three of Wands": "What you've put in motion is beginning to unfold. The present energy is one of anticipation — you've done the work, now you wait with confidence as results begin to arrive.",
    "Four of Wands": "The present energy is celebratory and warm. A moment of harmony, achievement, or joyful connection is here — or very close. Allow yourself to enjoy it fully.",
    "Five of Wands": "There is friction in the air. Competing ideas, clashing energies, or a sense of struggle defines the present moment. Try to see the creative potential in the conflict rather than letting it exhaust you.",
    "Six of Wands": "You are stepping into a moment of recognition and success. The present energy supports your confidence — own your achievements and let yourself be seen.",
    "Seven of Wands": "You may feel like you're defending yourself on multiple fronts right now. The energy is one of resilience — you have what it takes to hold your ground, but choose your battles wisely.",
    "Eight of Wands": "Everything is moving fast. The present energy is swift, exciting, and a little breathless. News may be coming, things are accelerating — try to direct that energy rather than be swept away by it.",
    "Nine of Wands": "You are tired, but you haven't given up. The present energy is one of weary resilience — you've come so far, and you have just a little further to go. Rest if you need to, but don't quit.",
    "Ten of Wands": "Right now you may be carrying more than your fair share. The present energy is heavy with responsibility or obligation. Ask yourself honestly: what can you put down?",
    "Page of Wands": "A fresh, enthusiastic energy surrounds you right now. You may be at the beginning of a new creative adventure — embrace the excitement and don't worry too much about the destination yet.",
    "Knight of Wands": "The present energy is bold, fast, and full of fire. You're ready to charge ahead — just make sure you have some sense of where you're going before you gallop off.",
    "Queen of Wands": "You are radiating confidence and warmth right now. The present energy supports bold self-expression, creative leadership, and showing up fully as yourself.",
    "King of Wands": "The present energy calls for visionary leadership and decisive action. You have the charisma and the clarity to inspire others — trust your instincts and lead with passion.",
    // CUPS
    "Ace of Cups": "A beautiful emotional beginning is available to you right now. Love, compassion, creativity, or spiritual connection is being offered. Open your heart and receive it.",
    "Two of Cups": "The present energy is one of deep connection and mutual understanding. Whether in love or friendship, a meaningful bond is either forming or being renewed. Honour it.",
    "Three of Cups": "Joy, friendship, and celebration are the energy of this moment. Come together with the people who lift you up — this is a time for shared happiness.",
    "Four of Cups": "You may be feeling a little flat or disconnected right now. The present energy invites you to look up — something good may be right in front of you, waiting to be noticed.",
    "Five of Cups": "Grief or disappointment may be colouring the present moment. The energy here asks you to feel what you need to feel — but also to gently turn your gaze toward what still remains.",
    "Six of Cups": "The past is visiting the present — through memory, nostalgia, or the return of someone or something familiar. The energy is gentle and bittersweet. Let it bring comfort, not longing.",
    "Seven of Cups": "You may be surrounded by options, daydreams, or distractions right now. The present energy is dreamy but potentially unfocused. Get clear on what you truly want before you choose.",
    "Eight of Cups": "Something is asking to be left behind. The present energy is one of gentle release — walking away not in anger, but in search of something more meaningful.",
    "Nine of Cups": "Right now the energy is one of satisfaction and emotional fulfilment. A wish may be granted, or a sense of contentment is settling in. You deserve to enjoy this.",
    "Ten of Cups": "The present energy is one of deep emotional joy and connection. Family, belonging, and heartfelt happiness are at the centre of this moment. Let yourself be grateful.",
    "Page of Cups": "A dreamy, imaginative, and emotionally open energy surrounds you right now. You may receive an unexpected message or feel a creative or intuitive nudge — follow it.",
    "Knight of Cups": "Romance, idealism, and an offer from the heart are in the air. The present energy is emotionally charged and beautifully sincere — but make sure the feeling is grounded in reality too.",
    "Queen of Cups": "The present energy calls for deep empathy and emotional attunement. Lead with compassion — for yourself and others. Your intuition right now is your greatest guide.",
    "King of Cups": "The present energy supports emotional wisdom and calm leadership. You are being called to hold space for others — or to seek out someone who can hold space for you.",
    // SWORDS
    "Ace of Swords": "A moment of breakthrough clarity is available to you right now. The present energy is sharp and illuminating — the truth is visible if you have the courage to look directly at it.",
    "Two of Swords": "You are at a standstill, caught between two options and perhaps avoiding making a choice. The present energy asks you to gather the information you need and trust yourself to decide.",
    "Three of Swords": "Pain is present right now — heartbreak, disappointment, or a difficult truth. The present energy, though hard, is one of necessary clearing. Let yourself grieve so you can heal.",
    "Four of Swords": "Rest is not a luxury right now — it is a necessity. The present energy is one of recuperation and stillness. Step back from the noise, and let your mind and body recover.",
    "Five of Swords": "There may be conflict or tension in the air, and not everyone will come out feeling good. The present energy asks you to consider whether winning is truly worth the cost.",
    "Six of Swords": "You are moving away from difficulty toward calmer waters. The present energy is one of transition — things aren't perfect yet, but they are getting better. Keep moving forward.",
    "Seven of Swords": "Something may not be quite what it seems right now. The present energy asks for careful discernment — be honest in your own actions, and stay alert to those who may not be.",
    "Eight of Swords": "You may feel stuck or trapped right now, but the restrictions around you may be more mental than real. The present energy asks: what would you do if you believed you were free?",
    "Nine of Swords": "Anxiety and worry may be dominating your thoughts right now. The present energy is one of mental turbulence — but remember, the mind often makes things darker than they truly are.",
    "Ten of Swords": "Something is at its end. The present energy, though painful, is one of release and finality. What is over is over — and that means something new can finally begin.",
    "Page of Swords": "Curiosity, sharp thinking, and a hunger for truth define the present energy. Ask questions, investigate, and don't be afraid to speak your mind — but choose your words carefully.",
    "Knight of Swords": "You are ready to charge ahead with fierce determination. The present energy is fast and driven — just make sure you take a breath before you act, or you may miss something important.",
    "Queen of Swords": "The present energy calls for clear-eyed honesty and sharp discernment. Cut through the noise and see things as they truly are. Your clarity right now is a gift to yourself and others.",
    "King of Swords": "Logic, authority, and intellectual strength are the energies of the present moment. Approach your situation with reason and calm — the truth, applied with wisdom, will serve you well.",
    // PENTACLES
    "Ace of Pentacles": "A new opportunity in the material world — financial, professional, or practical — is presenting itself right now. The energy is grounded and promising. Take the first step.",
    "Two of Pentacles": "You are juggling multiple priorities right now, and balance is the key. The present energy asks you to stay flexible and keep your sense of humour as you manage the moving parts of your life.",
    "Three of Pentacles": "Collaboration and skilled effort are at the centre of this moment. The present energy supports teamwork, learning, and the satisfaction of doing something well alongside others.",
    "Four of Pentacles": "You may be holding on tightly right now — to money, to control, to what feels safe. The present energy asks you to examine whether that grip is protective or limiting.",
    "Five of Pentacles": "A period of hardship or scarcity may be weighing on you right now. The present energy, though difficult, asks you to look for the support that is available — it may be closer than you think.",
    "Six of Pentacles": "The present energy is one of generous exchange. Whether you are giving or receiving, the flow of resources and kindness is an important theme right now. Be open to both.",
    "Seven of Pentacles": "You are in a moment of patient waiting and honest assessment. The present energy asks you to pause and consider whether what you're investing in is truly worth the return.",
    "Eight of Pentacles": "Hard work, focus, and a commitment to mastery define the present energy. You are honing your craft, building your skills — the effort you're putting in right now will pay off.",
    "Nine of Pentacles": "The present energy is one of self-sufficiency and quiet abundance. You have worked hard to get here — allow yourself to enjoy the fruits of that effort without guilt.",
    "Ten of Pentacles": "The present energy is one of lasting security and legacy. Family, community, and long-term stability are at the forefront — consider how your choices now will ripple into the future.",
    "Page of Pentacles": "A grounded, curious, and eager energy surrounds you right now. You may be learning something new or taking the first practical steps toward a goal. Stay diligent and patient.",
    "Knight of Pentacles": "Slow, steady, and utterly reliable — the present energy asks you to keep going, methodically and without shortcuts. Progress may feel slow, but it is solid and real.",
    "Queen of Pentacles": "The present energy is warm, nurturing, and beautifully grounded. Take care of yourself and those around you — and know that practical acts of love are just as meaningful as grand gestures.",
    "King of Pentacles": "The present energy is one of mastery and material confidence. You have the wisdom and the resources to make smart decisions right now — trust your experience and lead with quiet authority."
  },

  "Future · Upcoming": {
    // MAJOR ARCANA
    "The Fool": "The path ahead holds a new beginning — uncharted, exciting, and full of potential. The outcome is shaped by your willingness to step forward with curiosity rather than fear. Trust the journey, even without a map.",
    "The Magician": "The future holds real potential for success — but it will require you to show up fully and use every gift at your disposal. The outcome you desire is within reach. Believe in your own power.",
    "The High Priestess": "The outcome ahead may not be immediately obvious — it will reveal itself in its own time, through intuition and stillness. Trust that the answers are already within you, waiting to surface.",
    "The Empress": "What lies ahead is a season of abundance, creativity, and nurturing growth. The future holds beauty and flourishing — if you are willing to tend to it with patience and love.",
    "The Emperor": "The future holds a need for — and the building of — solid structure and stability. The outcome will be shaped by your ability to lead with clarity and create foundations that last.",
    "The Hierophant": "The path ahead may involve seeking or offering guidance, honouring tradition, or finding your place within a larger community or belief system. The outcome calls for integrity and wisdom.",
    "The Lovers": "A meaningful choice lies ahead, and the outcome will depend on whether you lead with your true heart. Love, alignment, and authentic commitment are the energies of what is coming.",
    "The Chariot": "The future holds victory — but it will require sustained effort and a clear direction. The outcome is yours to claim if you keep moving forward with discipline and determination.",
    "Strength": "What lies ahead will call on your deepest reserves of courage and compassion. The outcome is one of quiet triumph — not through force, but through the unshakeable strength of your character.",
    "The Hermit": "The path ahead may involve a period of solitude, introspection, or turning away from the noise of the world. The outcome will be a deeper wisdom — and a clearer sense of who you truly are.",
    "Wheel of Fortune": "Change is coming — and it is likely to be in your favour. The future holds a turning of the wheel, a shift in fortune, a sense that life is moving again. Trust the cycle.",
    "Justice": "The outcome ahead is one of fairness and truth. What is right will be recognised. If you have acted with integrity, the future holds the reward of that. If not, there may be a reckoning — but also, a chance to make it right.",
    "The Hanged Man": "The future may ask you to pause before you can move forward. A period of waiting or surrender lies ahead — and through that stillness, you will see something you couldn't see before.",
    "Death": "What lies ahead is transformation — a profound ending that makes way for something entirely new. The future holds release and rebirth. Do not fear what must change.",
    "Temperance": "The future holds healing, balance, and the quiet joy of things coming into alignment. The outcome is one of peace — not the dramatic kind, but the deep, lasting kind that changes everything.",
    "The Devil": "A pattern or attachment may come to a head in the future. The outcome will depend on whether you choose freedom or stay bound. You have more power than you think — use it.",
    "The Tower": "Change is coming — sudden, unexpected, and potentially unsettling. But what the future holds beyond that disruption is liberation. The tower falls so that something more honest can stand in its place.",
    "The Star": "The future is bright with hope and possibility. After whatever difficulty you have walked through, the outcome is one of renewal, healing, and the quiet arrival of everything you dared to wish for.",
    "The Moon": "The path ahead may still hold some uncertainty and confusion. The future asks you to move through the fog with trust rather than panic — and promises that clarity will eventually come.",
    "The Sun": "The future holds joy, success, and a radiant sense of aliveness. The outcome is a bright one — warmth, clarity, and the feeling that life is finally, fully, going your way.",
    "Judgement": "A moment of reckoning and renewal lies ahead. The future holds an awakening — a call to step fully into who you are meant to be. The outcome will change your life for the better, if you have the courage to answer.",
    "The World": "The future holds completion, fulfilment, and the arrival of a long-awaited outcome. What you have been working toward is nearly within reach. The ending, when it comes, will feel whole.",
    // WANDS
    "Ace of Wands": "The future holds a spark of something new and exciting. A creative opportunity or passionate new beginning is on its way — be ready to act when inspiration arrives.",
    "Two of Wands": "The path ahead involves bold choices and a willingness to expand your horizons. The future holds the potential for great things — if you're brave enough to reach for them.",
    "Three of Wands": "What you've been building is about to bear fruit. The future holds the return of your efforts — expansion, opportunity, and confirmation that your vision was sound.",
    "Four of Wands": "A celebration or milestone lies ahead. The future holds a moment of joyful achievement — a coming together, a homecoming, a reason to feel genuinely proud.",
    "Five of Wands": "Some friction or competition may lie ahead. The future holds a challenge, but also the energy to rise to meet it. Stay focused on your own path rather than getting drawn into unnecessary conflict.",
    "Six of Wands": "Success and recognition are heading your way. The future holds a moment of triumph — step into it with confidence, and let yourself be celebrated.",
    "Seven of Wands": "The future may ask you to stand your ground against opposition or doubt. Hold firm in what you know is right — your perseverance will be what makes the difference.",
    "Eight of Wands": "Things are about to pick up speed. The future holds rapid movement, exciting news, and a sense that everything is finally in motion. Hold on and enjoy the ride.",
    "Nine of Wands": "The future asks for one final push. You are closer than you think — don't give up now. The outcome lies just beyond the point where it feels hardest.",
    "Ten of Wands": "A period of increased responsibility lies ahead. The future holds hard work and perhaps some burden — but also the deep satisfaction of carrying something that truly matters.",
    "Page of Wands": "An exciting new adventure or creative beginning is on the horizon. The future holds something fresh and full of potential — approach it with enthusiasm and an open mind.",
    "Knight of Wands": "The future holds fast-moving energy and bold action. Something exciting is coming — just make sure you channel that fire with some direction, or it may burn too bright too fast.",
    "Queen of Wands": "The future holds a period of confident self-expression and creative leadership. Step into your power — the outcome rewards those who show up boldly and authentically.",
    "King of Wands": "The future holds a call to lead with vision and passion. The outcome is one of inspired achievement — trust your instincts and don't be afraid to take up space.",
    // CUPS
    "Ace of Cups": "A new beginning in love or emotional life is on its way. The future holds an opening of the heart — be ready to give and receive with equal grace.",
    "Two of Cups": "A meaningful connection — romantic or deeply personal — is in the future. The outcome holds mutual love, understanding, and the joy of being truly seen by another.",
    "Three of Cups": "Celebration, friendship, and shared joy lie ahead. The future holds a gathering of hearts — allow yourself to be surrounded by people who bring out the best in you.",
    "Four of Cups": "The future may hold a period of quiet reflection or mild dissatisfaction. Use it well — sometimes the gift of discontent is that it points you toward what you truly desire.",
    "Five of Cups": "Some disappointment may lie ahead, but it will not be the end of the story. The future asks you to grieve what doesn't work out — and then turn toward what still remains.",
    "Six of Cups": "The future may bring a return — of a person, a feeling, or a chapter from the past. Approach it with openness, and allow the sweetness of that reconnection to nourish you.",
    "Seven of Cups": "The future holds many possibilities, which may feel both exciting and overwhelming. The outcome will depend on your ability to get clear on what you truly want, rather than chasing every option.",
    "Eight of Cups": "The future may ask you to walk away from something that no longer serves you. The outcome lies in having the courage to seek something more meaningful, even if it means leaving comfort behind.",
    "Nine of Cups": "A wish is on its way to being granted. The future holds emotional fulfilment and the quiet satisfaction of getting what you truly wanted. Receive it with gratitude.",
    "Ten of Cups": "The future holds deep happiness, connection, and a sense of emotional wholeness. The outcome is one of lasting joy — the kind that comes from love, belonging, and being exactly where you are meant to be.",
    "Page of Cups": "The future holds an unexpected message or a tender new beginning. Stay open to the surprising, the imaginative, and the emotionally meaningful — something beautiful is making its way to you.",
    "Knight of Cups": "A romantic or heartfelt offer is heading your way. The future holds a gesture of love or beauty — receive it with both your heart and your discernment.",
    "Queen of Cups": "The future calls for deep emotional wisdom and compassionate leadership. The outcome rewards those who lead with empathy and trust their intuition above all else.",
    "King of Cups": "The future holds a need for emotional maturity and calm wisdom. The outcome is shaped by your ability to stay centred in the storm — and to offer that steadiness to others.",
    // SWORDS
    "Ace of Swords": "A breakthrough of clarity or truth is heading your way. The future holds a moment of sharp, liberating insight — be ready to act on what you discover.",
    "Two of Swords": "A decision point lies ahead that you will need to face clearly. The future asks you to gather your courage and make the choice — sitting in indecision will only delay what needs to happen.",
    "Three of Swords": "Some pain may lie ahead — but it is the kind that ultimately clears the air and makes space for healing. The future holds a difficult truth that, once faced, will set you free.",
    "Four of Swords": "A period of rest and recovery lies ahead. The future holds a necessary pause — take it. Your strength will return, and you will be better for having rested.",
    "Five of Swords": "Some conflict or tension may arise in the future. The outcome invites you to consider what true victory looks like — and whether it's worth the cost of the battle.",
    "Six of Swords": "The future holds a gradual movement toward peace and calmer waters. Things will improve — perhaps slowly, but the direction is forward and the destination is better than where you've been.",
    "Seven of Swords": "Be careful and discerning in the period ahead. The future asks for honesty and clear-eyed awareness — of your own motives and those of the people around you.",
    "Eight of Swords": "Freedom is the outcome — but it may require you to change how you think before you can change your circumstances. The future holds release, if you're willing to see it.",
    "Nine of Swords": "Some anxiety or worry may lie ahead, but do not let your mind convince you that the worst will happen. The future holds resolution — and the darkness of night always gives way to morning.",
    "Ten of Swords": "Something will end — completely and finally. The future holds a painful conclusion, but also the profound relief of having reached the bottom. The only way from here is up.",
    "Page of Swords": "The future holds a period of sharp curiosity and new thinking. An idea or piece of information is coming that will change the way you see things — stay alert and keep asking questions.",
    "Knight of Swords": "The future holds fast action and bold moves. The outcome will be shaped by how decisively you act — but take a breath first. Speed is powerful; recklessness is costly.",
    "Queen of Swords": "The future calls for clear thinking and honest communication. The outcome rewards those who see things as they truly are and have the courage to speak the truth with both precision and kindness.",
    "King of Swords": "The future holds a need for clear authority and intellectual leadership. The outcome will be shaped by logic, fairness, and the willingness to make difficult decisions with wisdom.",
    // PENTACLES
    "Ace of Pentacles": "A new opportunity in the material world is on its way. The future holds the seed of something prosperous and real — tend to it carefully, and it will grow into something lasting.",
    "Two of Pentacles": "The future holds a need for balance and adaptability. Things may shift and fluctuate, but your ability to stay flexible and keep moving will determine the outcome.",
    "Three of Pentacles": "Collaboration and skilled effort will shape the future. The outcome rewards those who work well with others and take pride in doing things properly.",
    "Four of Pentacles": "The future may bring a choice between security and growth. The outcome will depend on whether you can loosen your grip enough to let something new in.",
    "Five of Pentacles": "A period of difficulty may lie ahead, but you will not be alone in it. The future holds hardship — but also the possibility of unexpected support, if you allow yourself to seek it.",
    "Six of Pentacles": "The future holds a flow of generosity — giving, receiving, and the satisfaction of balance restored. The outcome is shaped by how openly and fairly you engage with the exchange.",
    "Seven of Pentacles": "Patient effort will pay off. The future holds the reward of sustained work — though it may take longer than you'd like. Trust that what you're building is worth the wait.",
    "Eight of Pentacles": "The future holds a deepening of skill and a commitment to doing excellent work. The outcome rewards diligence — keep your head down and keep going.",
    "Nine of Pentacles": "The future holds a beautiful arrival — of independence, abundance, and the quiet pleasure of having created something to be proud of. You will get to enjoy the fruits of your labour.",
    "Ten of Pentacles": "The future holds lasting security, legacy, and the joy of something truly stable and enduring. The outcome is one of long-term fulfilment — in finances, family, or both.",
    "Page of Pentacles": "The future holds a grounded new beginning — a chance to learn, grow, and take the first steps toward something meaningful. Approach it with patience and a willingness to start small.",
    "Knight of Pentacles": "Slow, steady progress will define the path ahead. The future holds the quiet satisfaction of methodical effort — trust the process, even when it feels slow.",
    "Queen of Pentacles": "The future holds warmth, practicality, and the deep satisfaction of a life well-tended. The outcome rewards those who nurture both themselves and the people around them.",
    "King of Pentacles": "The future holds a arrival of material success and grounded mastery. The outcome is one of solid achievement — built over time, through wisdom, patience, and reliable effort."
  }
};

// === HELPERS ===
function getSymbol(name) {
  const major = ["The Fool","The Magician","The High Priestess","The Empress","The Emperor",
    "The Hierophant","The Lovers","The Chariot","Strength","The Hermit",
    "Wheel of Fortune","Justice","The Hanged Man","Death","Temperance",
    "The Devil","The Tower","The Star","The Moon","The Sun","Judgement","The World"];
  if (major.includes(name)) return "✦";
  if (name.includes("Wands")) return "🔥";
  if (name.includes("Cups")) return "💧";
  if (name.includes("Swords")) return "⚔️";
  if (name.includes("Pentacles")) return "🌿";
  return "✦";
}

function getMeaning(cardName, positionLabel) {
  const posMap = meanings[positionLabel];
  if (posMap && posMap[cardName]) return posMap[cardName];
  return "This card carries deep wisdom for you. Reflect on its imagery and trust what comes to you intuitively in this moment.";
}

function pickUniqueCards(deck, count) {
  const selected = new Set();
  while (selected.size < count) {
    selected.add(Math.floor(Math.random() * deck.length));
  }
  return Array.from(selected);
}

// === CARD BUILDER ===
function createCardElement(cardName, position, reversed) {
  const card = document.createElement('div');
  card.className = `tarot-card${reversed ? ' reversed' : ''}`;
  card.innerHTML = `
    <div class="card-position">${position}</div>
    <div class="card-symbol">${getSymbol(cardName)}</div>
    <div class="card-name ${reversed ? 'is-reversed' : ''}">${cardName}</div>
    ${reversed ? '<div class="reversed-label">↑ Reversed ↑</div>' : ''}
    <div class="click-hint">tap to reveal</div>
  `;
  card.addEventListener('click', () => openModal(cardName, position, reversed));
  return card;
}

// === MODAL ===
const modal = document.getElementById('modal');
const modalPosition = document.getElementById('modal-position');
const modalTitle = document.getElementById('modal-title');
const modalMeaning = document.getElementById('modal-meaning');
const modalReversedTag = document.getElementById('modal-reversed-tag');

modal.style.display = 'none';

function openModal(cardName, position, reversed) {
  modalPosition.textContent = position;
  modalTitle.textContent = cardName;
  modalReversedTag.style.display = reversed ? 'inline-block' : 'none';
  const raw = getMeaning(cardName, position);
  modalMeaning.innerHTML = raw.split('\n\n').map(p => `<p style="margin-bottom:1rem">${p}</p>`).join('');
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => modal.classList.add('visible'));
}

function closeModal() {
  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden', 'true');
  setTimeout(() => { modal.style.display = 'none'; }, 300);
}

document.getElementById('modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// === NAVIGATION ===
function showPage(pageId) {
  const pages = ['home-page', 'tarot-page', 'bazi-page', 'horoscope-page'];
  pages.forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'flex';
  if (pageId === 'tarot-page') {
    document.getElementById('modal').style.display = 'none';
  }
}

// Nav buttons
document.getElementById('Tarot-btn').addEventListener('click', () => showPage('tarot-page'));
document.getElementById('Bazi-btn').addEventListener('click', () => showPage('bazi-page'));
document.getElementById('Horoscope-btn').addEventListener('click', () => showPage('horoscope-page'));

// Back buttons
document.getElementById('back-btn').addEventListener('click', () => {
  document.getElementById('card-results').innerHTML = '';
  btn.style.display = 'block'; // show draw button again
  showPage('home-page');
});
document.getElementById('back-btn-bazi').addEventListener('click', () => showPage('home-page'));
document.getElementById('back-btn-horoscope').addEventListener('click', () => {
  document.getElementById('horoscope-result').innerHTML = '';
  showPage('home-page');
});

// === DRAW LOGIC ===
const btn = document.getElementById('draw-btn');
const container = document.getElementById('card-results');

btn.addEventListener('click', () => {
  btn.style.display = 'none';
  container.innerHTML = '';

  const indices = pickUniqueCards(tarotDeck, 3);
  indices.forEach((index, i) => {
    const reversed = Math.random() < 0.5;
    const card = createCardElement(tarotDeck[index], positions[i], reversed);
    container.appendChild(card);
  });
});