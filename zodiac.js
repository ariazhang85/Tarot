// === ZODIAC CALCULATOR ===
function getZodiac(month, day) {
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
  return "Pisces";
}

// === COMPATIBILITY DATA ===
// Each pair has: love, friendship, work, soul scores (0-100) + analysis for each
const compatibilityData = {
  "Aries+Taurus": {
    love: 65, friendship: 70, work: 75, soul: 60,
    loveDesc: "Aries' fire meets Taurus' earth — exciting at first, but clashes arise when Aries rushes and Taurus digs in. With patience, this can be deeply passionate and loyal.",
    friendDesc: "A reliable duo — Aries brings adventure, Taurus brings stability. They balance each other well as long as Aries respects Taurus' slower pace.",
    workDesc: "Aries leads, Taurus executes — a solid professional pairing. Taurus grounds Aries' impulsive ideas into something real and lasting.",
    soulDesc: "A karmic pairing of action and stillness. Together they learn the art of slowing down without losing momentum."
  },
  "Aries+Gemini": {
    love: 82, friendship: 88, work: 78, soul: 75,
    loveDesc: "A vibrant, playful connection full of laughter and spontaneity. Both love excitement and novelty — though they must work to build emotional depth beneath the fun.",
    friendDesc: "One of the best friend pairings in the zodiac. Endlessly entertaining, curious, and adventurous together. Never a dull moment.",
    workDesc: "Creative fireworks — both are quick thinkers and idea generators. They need a grounding influence to follow through on their brilliant plans.",
    soulDesc: "Two spirits who refuse to be tamed — they inspire each other to live boldly and think freely."
  },
  "Aries+Cancer": {
    love: 58, friendship: 62, work: 60, soul: 65,
    loveDesc: "A challenging but deeply growth-oriented pairing. Aries is bold and direct; Cancer is sensitive and nurturing. They must learn each other's emotional language.",
    friendDesc: "Loyalty is their strongest bond. Cancer will fiercely protect Aries, and Aries will always show up for Cancer in times of need.",
    workDesc: "Different styles — Aries charges ahead while Cancer plans carefully. With mutual respect, they cover each other's blind spots.",
    soulDesc: "A soul lesson in vulnerability and courage — Aries teaches Cancer to be brave, Cancer teaches Aries to feel deeply."
  },
  "Aries+Leo": {
    love: 90, friendship: 88, work: 82, soul: 85,
    loveDesc: "A blazing, passionate romance between two fire signs who truly understand each other's need for excitement and admiration. Power struggles may arise, but the chemistry is undeniable.",
    friendDesc: "Loyal, fun, and fiercely supportive — these two light up every room they enter together. A friendship built on mutual respect and shared enthusiasm.",
    workDesc: "Natural leaders who inspire each other to reach higher. They must agree on who leads when, but together they are unstoppable.",
    soulDesc: "Two flames that burn brighter together — a soul connection rooted in shared passion, courage, and an unquenchable love of life."
  },
  "Aries+Virgo": {
    love: 55, friendship: 65, work: 78, soul: 58,
    loveDesc: "Aries and Virgo speak different love languages — Aries is bold and impulsive, Virgo is thoughtful and precise. Growth comes through patience and genuine appreciation of difference.",
    friendDesc: "An unlikely but surprisingly grounding friendship. Virgo keeps Aries organised; Aries pushes Virgo out of their comfort zone.",
    workDesc: "A highly effective professional duo. Aries generates ideas; Virgo perfects and executes them. One of the best working combinations in the zodiac.",
    soulDesc: "A soul pairing of fire and earth — learning that passion and precision together create something neither could build alone."
  },
  "Aries+Libra": {
    love: 78, friendship: 75, work: 70, soul: 80,
    loveDesc: "Opposites in the zodiac — Aries is bold, Libra is balanced. The attraction is magnetic and the tension is palpable. A love story of beautiful contrasts.",
    friendDesc: "Aries brings decisiveness to Libra's indecision; Libra brings diplomacy to Aries' bluntness. A wonderfully complementary friendship.",
    workDesc: "Aries drives the vision; Libra manages relationships and presentation. Together they make a strong, well-rounded team.",
    soulDesc: "A classic soul pairing of self and other — Aries learns to consider, Libra learns to act. Together they find wholeness."
  },
  "Aries+Scorpio": {
    love: 72, friendship: 65, work: 68, soul: 78,
    loveDesc: "Intensely magnetic and deeply complex. Two powerful signs who are drawn to each other like moths to flame — passionate, consuming, and transformative.",
    friendDesc: "A fierce, loyal bond once trust is established. Both are fiercely protective of those they care about and will go to the ends of the earth for each other.",
    workDesc: "A power duo when aligned — both are driven, determined, and relentless. They must manage competition and control issues carefully.",
    soulDesc: "A soul connection forged in fire and depth — together they face their shadows and emerge stronger, wiser, and more alive."
  },
  "Aries+Sagittarius": {
    love: 88, friendship: 92, work: 80, soul: 85,
    loveDesc: "A wild, joyful, adventurous love between two fire signs who truly get each other. Freedom-loving and optimistic — this relationship feels like an endless adventure.",
    friendDesc: "Best friends who never run out of things to explore, discuss, or laugh about. A friendship that feels like pure oxygen.",
    workDesc: "Enthusiastic, visionary, and bold — together they dream big and inspire others. They need to remember that follow-through matters too.",
    soulDesc: "Two free spirits who recognise each other across every lifetime — a soul bond rooted in shared philosophy, wonder, and love of the journey."
  },
  "Aries+Capricorn": {
    love: 60, friendship: 65, work: 82, soul: 62,
    loveDesc: "A challenging pairing that requires real commitment. Aries is impulsive and spontaneous; Capricorn is measured and strategic. Mutual respect unlocks their potential.",
    friendDesc: "An unusual but grounding friendship. Capricorn tempers Aries' recklessness; Aries injects excitement into Capricorn's structured world.",
    workDesc: "One of the most effective working pairs — Aries leads with boldness, Capricorn leads with strategy. Together they build empires.",
    soulDesc: "A soul lesson in the balance of fire and earth — acting fast versus planning wisely. Together they learn that both are needed."
  },
  "Aries+Aquarius": {
    love: 80, friendship: 85, work: 78, soul: 82,
    loveDesc: "An exciting, unconventional partnership between two independent spirits. They respect each other's freedom and share a love of breaking the rules.",
    friendDesc: "Electric, innovative, and endlessly stimulating — a friendship that sparks new ideas and challenges both to grow.",
    workDesc: "Visionary and bold — together they are pioneers. Both are forward-thinking and unafraid to challenge the status quo.",
    soulDesc: "Two originals who find in each other a rare, authentic understanding — a soul bond that transcends convention."
  },
  "Aries+Pisces": {
    love: 65, friendship: 68, work: 62, soul: 72,
    loveDesc: "A tender and complex pairing — Aries' boldness awakens Pisces' quiet depths. With care and understanding, this becomes a beautifully balanced love.",
    friendDesc: "Aries protects; Pisces nurtures. An unlikely but surprisingly sweet friendship built on complementary strengths.",
    workDesc: "Aries brings drive; Pisces brings intuition and creativity. Together they need structure and clear communication to thrive.",
    soulDesc: "A mystical soul connection — the warrior and the dreamer, teaching each other the value of both action and surrender."
  },
  "Taurus+Gemini": {
    love: 60, friendship: 68, work: 65, soul: 58,
    loveDesc: "Taurus wants stability and depth; Gemini craves variety and stimulation. A beautiful challenge — one that rewards patience and genuine curiosity about each other.",
    friendDesc: "Gemini entertains; Taurus grounds. A fun and surprisingly complementary friendship when both appreciate what the other brings.",
    workDesc: "Gemini generates; Taurus refines. A productive duo when they focus their different energies in the same direction.",
    soulDesc: "A soul lesson in the beauty of staying versus exploring — together they learn that roots and wings are both essential."
  },
  "Taurus+Cancer": {
    love: 90, friendship: 88, work: 78, soul: 88,
    loveDesc: "One of the most naturally compatible pairings — both deeply value security, loyalty, and home. A tender, nurturing love that only grows stronger with time.",
    friendDesc: "Deeply loyal, emotionally attuned, and endlessly supportive. A friendship that feels like coming home.",
    workDesc: "Both are dependable and dedicated — a steady, productive working relationship built on mutual trust and shared values.",
    soulDesc: "A soul connection of comfort and belonging — two hearts who recognise each other as safe harbour in a chaotic world."
  },
  "Taurus+Leo": {
    love: 70, friendship: 72, work: 68, soul: 65,
    loveDesc: "Both are loyal and sensual, but two strong wills must learn to share the spotlight. When they do, this becomes a luxurious and devoted partnership.",
    friendDesc: "A friendship of mutual appreciation and shared love of the finer things in life. Both are fiercely loyal once committed.",
    workDesc: "Taurus provides steady execution; Leo provides inspiration and visibility. A solid team when egos are in check.",
    soulDesc: "A soul pairing of earthly pleasure and radiant expression — learning to appreciate both comfort and grandeur."
  },
  "Taurus+Virgo": {
    love: 88, friendship: 85, work: 90, soul: 82,
    loveDesc: "Two earth signs who understand each other's need for stability, reliability, and quiet devotion. A love built on deep trust and practical care.",
    friendDesc: "One of the most reliable and enduring friendships in the zodiac — grounded, loyal, and deeply understanding.",
    workDesc: "A dream team — both are hardworking, detail-oriented, and committed to excellence. Together they produce exceptional results.",
    soulDesc: "A soul bond of quiet, enduring depth — two kindred spirits who find in each other the peace of being truly known."
  },
  "Taurus+Libra": {
    love: 78, friendship: 75, work: 70, soul: 72,
    loveDesc: "Both ruled by Venus — a shared love of beauty, romance, and harmony. A naturally pleasant and aesthetically beautiful pairing.",
    friendDesc: "A friendship of shared pleasures — art, beauty, good food, and meaningful conversation. Deeply enjoyable company for each other.",
    workDesc: "Both value elegance and quality. Together they create beautiful, well-considered work — though they must watch a tendency toward indecision.",
    soulDesc: "A Venus-blessed soul connection — two lovers of beauty who together create something truly harmonious and lovely."
  },
  "Taurus+Scorpio": {
    love: 85, friendship: 75, work: 72, soul: 88,
    loveDesc: "Opposite signs with a magnetic, almost fated attraction. Intensely loyal, deeply sensual, and profoundly transformative — this love changes both forever.",
    friendDesc: "A fierce, unbreakable bond built on absolute loyalty and mutual respect. Both are slow to trust but completely devoted once they do.",
    workDesc: "Determined and relentless — both signs are fixed and committed to seeing things through. A powerful, productive partnership.",
    soulDesc: "One of the deepest soul connections in the zodiac — earth and water, body and spirit, meeting in a bond that transcends lifetimes."
  },
  "Taurus+Sagittarius": {
    love: 58, friendship: 65, work: 62, soul: 60,
    loveDesc: "A challenging but growth-rich pairing. Taurus wants roots; Sagittarius wants wings. Love here requires real compromise and genuine appreciation of difference.",
    friendDesc: "Sagittarius expands Taurus' horizons; Taurus gives Sagittarius a comfortable home base to return to. A complementary friendship.",
    workDesc: "Taurus grounds Sagittarius' big ideas into something actionable. A productive duo when they respect each other's different rhythms.",
    soulDesc: "A soul lesson in the dance between freedom and security — learning that both are possible, and both are necessary."
  },
  "Taurus+Capricorn": {
    love: 88, friendship: 85, work: 92, soul: 82,
    loveDesc: "Two earth signs with a deep, natural compatibility — both value loyalty, stability, and building something lasting together. A quietly powerful love.",
    friendDesc: "A deeply dependable friendship built on shared values and mutual respect. The kind of friends who show up no matter what.",
    workDesc: "One of the most effective working combinations — both are disciplined, ambitious, and committed to excellence. Together they build lasting success.",
    soulDesc: "A soul bond of shared purpose and quiet strength — two builders who recognise in each other a kindred dedication to what truly lasts."
  },
  "Taurus+Aquarius": {
    love: 52, friendship: 60, work: 65, soul: 55,
    loveDesc: "A challenging pairing of tradition and revolution. Taurus craves security; Aquarius craves freedom. This love requires significant compromise and genuine respect.",
    friendDesc: "An unusual friendship that works when both are curious about what the other sees in the world. Taurus grounds Aquarius; Aquarius challenges Taurus.",
    workDesc: "Taurus brings reliability; Aquarius brings innovation. When they align, they produce work that is both creative and lasting.",
    soulDesc: "A soul lesson in the balance between the old and the new — learning that both tradition and change have their place."
  },
  "Taurus+Pisces": {
    love: 85, friendship: 82, work: 72, soul: 88,
    loveDesc: "A beautifully tender pairing — Taurus provides the stability Pisces needs to dream freely; Pisces brings magic and wonder into Taurus' grounded world.",
    friendDesc: "A deeply caring and intuitive friendship. Taurus protects; Pisces inspires. Both feel profoundly safe and understood with each other.",
    workDesc: "Taurus provides structure for Pisces' creativity. A productive pairing when Pisces' visions are given solid ground to grow on.",
    soulDesc: "A soulful, almost mystical connection — earth and water, the tangible and the transcendent, meeting in a love that is both gentle and eternal."
  },
  "Gemini+Cancer": {
    love: 62, friendship: 70, work: 65, soul: 65,
    loveDesc: "Gemini's mind meets Cancer's heart — a fascinating but delicate pairing. Gemini must learn emotional depth; Cancer must learn lightness. Rewarding with patience.",
    friendDesc: "Cancer nurtures Gemini's restless spirit; Gemini brightens Cancer's inner world. A sweet and surprisingly complementary friendship.",
    workDesc: "Gemini brings ideas; Cancer brings intuition and emotional intelligence. A creative and people-centred working partnership.",
    soulDesc: "A soul lesson in the balance of thinking and feeling — learning that the head and the heart are not enemies."
  },
  "Gemini+Leo": {
    love: 85, friendship: 88, work: 80, soul: 80,
    loveDesc: "Playful, creative, and endlessly entertaining — Gemini and Leo bring out the best in each other. A love full of laughter, admiration, and shared joy.",
    friendDesc: "One of the most fun and dynamic friendships in the zodiac. Both are social, expressive, and love being the life of the party.",
    workDesc: "Leo provides vision and charisma; Gemini provides ideas and adaptability. A creative and high-energy working team.",
    soulDesc: "Two performers who find in each other the perfect audience and the perfect partner — a soul bond rooted in joy and creative expression."
  },
  "Gemini+Virgo": {
    love: 62, friendship: 68, work: 78, soul: 60,
    loveDesc: "Both ruled by Mercury — sharp minds who love to communicate. But Gemini is scattered and Virgo is precise, requiring real patience and appreciation of difference.",
    friendDesc: "Intellectually stimulating and endlessly conversational. They challenge each other's thinking and keep each other sharp.",
    workDesc: "A highly efficient intellectual partnership — Gemini generates, Virgo organises and perfects. One of the best working combinations for mental tasks.",
    soulDesc: "A soul lesson in the two faces of Mercury — the breadth of knowledge versus the depth of understanding."
  },
  "Gemini+Libra": {
    love: 88, friendship: 90, work: 82, soul: 82,
    loveDesc: "Two air signs in beautiful harmony — intellectually stimulating, socially brilliant, and romantically playful. A love that feels effortless and endlessly interesting.",
    friendDesc: "One of the best friend pairings — witty, warm, social, and deeply attuned to each other. A friendship that sparkles.",
    workDesc: "Creative, communicative, and socially adept — together they excel in any field that requires ideas, people skills, and charm.",
    soulDesc: "A soul bond of minds and hearts — two air signs who find in each other the rare gift of being truly, joyfully understood."
  },
  "Gemini+Scorpio": {
    love: 60, friendship: 62, work: 65, soul: 68,
    loveDesc: "A complex, magnetic pairing — Gemini's lightness meets Scorpio's depth. Fascinating but challenging, this love requires real commitment to bridge their differences.",
    friendDesc: "An unusual friendship built on mutual fascination. Scorpio is intrigued by Gemini's mind; Gemini is captivated by Scorpio's depth.",
    workDesc: "Gemini brings adaptability; Scorpio brings focus and strategic thinking. A productive but occasionally tense working partnership.",
    soulDesc: "A soul lesson in the surface and the depths — learning that truth lives both in the light and in the shadows."
  },
  "Gemini+Sagittarius": {
    love: 82, friendship: 88, work: 75, soul: 85,
    loveDesc: "Opposite signs with a natural, joyful attraction — both love freedom, ideas, and adventure. A love that feels like the best conversation you've ever had.",
    friendDesc: "A friendship of pure intellectual and adventurous delight — they expand each other's world endlessly and joyfully.",
    workDesc: "Big ideas and broad vision — together they are inspiring and innovative. They need support to turn their grand plans into reality.",
    soulDesc: "A soul bond of eternal seekers — two wanderers who find in each other a kindred spirit and a fellow lover of truth."
  },
  "Gemini+Capricorn": {
    love: 55, friendship: 62, work: 72, soul: 55,
    loveDesc: "A challenging pairing that requires real mutual respect. Gemini is free-spirited and spontaneous; Capricorn is structured and goal-driven. Growth lives in the gap.",
    friendDesc: "An unlikely but grounding friendship. Capricorn gives Gemini direction; Gemini gives Capricorn permission to play.",
    workDesc: "Gemini's creativity combined with Capricorn's discipline makes for a surprisingly effective professional partnership.",
    soulDesc: "A soul lesson in the dance between freedom and structure — learning that both inspiration and discipline are needed to build something real."
  },
  "Gemini+Aquarius": {
    love: 88, friendship: 92, work: 85, soul: 85,
    loveDesc: "A meeting of brilliant, unconventional minds — this love is stimulating, free, and full of genuine understanding. Two originals who truly get each other.",
    friendDesc: "One of the most intellectually alive friendships in the zodiac — innovative, forward-thinking, and endlessly interesting.",
    workDesc: "Visionary and inventive — together they pioneer new ideas and challenge conventional thinking. A powerhouse creative partnership.",
    soulDesc: "A soul bond of pure intellectual and spiritual resonance — two free thinkers who recognise each other across every dimension."
  },
  "Gemini+Pisces": {
    love: 65, friendship: 70, work: 62, soul: 70,
    loveDesc: "A dreamy, creative pairing — both are fluid and imaginative, but both can also be elusive. A love that requires clarity and emotional honesty to truly flourish.",
    friendDesc: "A whimsical, creatively rich friendship. Together they dream, create, and imagine worlds that don't yet exist.",
    workDesc: "Highly creative but potentially unfocused — they need grounding support to bring their shared visions into reality.",
    soulDesc: "Two mutable souls who find in each other a rare, ethereal understanding — a bond that exists somewhere between dreams and reality."
  },
  "Cancer+Leo": {
    love: 72, friendship: 75, work: 68, soul: 72,
    loveDesc: "Cancer nurtures; Leo shines. When Leo appreciates Cancer's depth and Cancer celebrates Leo's light, this becomes a beautifully warm and devoted partnership.",
    friendDesc: "A warm, loyal, and deeply caring friendship — Cancer supports from the heart; Leo uplifts with radiant energy.",
    workDesc: "Cancer provides emotional intelligence and care; Leo provides vision and leadership. A strong people-centred team.",
    soulDesc: "A soul pairing of heart and light — the nurturer and the radiant one, teaching each other the true meaning of love."
  },
  "Cancer+Virgo": {
    love: 82, friendship: 80, work: 78, soul: 78,
    loveDesc: "A thoughtful, caring, and deeply devoted pairing — both show love through acts of service and genuine concern for each other's wellbeing.",
    friendDesc: "A deeply supportive and reliable friendship — both are givers who genuinely care about each other's happiness and growth.",
    workDesc: "Detail-oriented, caring, and committed — a quietly effective working partnership built on mutual dedication and high standards.",
    soulDesc: "A soul bond of quiet devotion — two healers who find in each other the safe space to be both strong and vulnerable."
  },
  "Cancer+Libra": {
    love: 65, friendship: 68, work: 65, soul: 65,
    loveDesc: "Both are romantic and relationship-oriented, but their emotional styles differ — Cancer is deep and feeling; Libra is social and mental. A rewarding but delicate balance.",
    friendDesc: "A harmonious friendship built on shared appreciation of beauty, connection, and kindness. Both are natural carers.",
    workDesc: "Cancer brings emotional insight; Libra brings diplomacy and balance. A people-centred and harmonious working team.",
    soulDesc: "A soul lesson in the balance of feeling and thinking — learning that love lives in both the depths and the light."
  },
  "Cancer+Scorpio": {
    love: 95, friendship: 88, work: 78, soul: 95,
    loveDesc: "One of the deepest and most profoundly connected pairings in the zodiac. Two water signs who understand each other at a soul level — intense, loyal, and transformative.",
    friendDesc: "A bond of extraordinary depth and loyalty — both are fiercely protective of those they love and deeply attuned to each other.",
    workDesc: "Intuitive, dedicated, and emotionally intelligent — a working partnership with genuine depth and shared commitment.",
    soulDesc: "A soul connection of almost mystical depth — two water signs who find in each other the ocean they have always been searching for."
  },
  "Cancer+Sagittarius": {
    love: 55, friendship: 62, work: 58, soul: 60,
    loveDesc: "A challenging but growth-rich pairing. Cancer needs closeness and security; Sagittarius needs freedom and adventure. Love here is a beautiful, ongoing negotiation.",
    friendDesc: "Sagittarius broadens Cancer's world; Cancer gives Sagittarius a warm home to return to. A complementary and caring friendship.",
    workDesc: "Cancer provides emotional grounding; Sagittarius provides vision and optimism. A thoughtful and expansive working combination.",
    soulDesc: "A soul lesson in the balance of home and horizon — learning that both belonging and freedom are essential to a full life."
  },
  "Cancer+Capricorn": {
    love: 80, friendship: 75, work: 82, soul: 80,
    loveDesc: "Opposite signs with a natural, complementary attraction — Cancer brings warmth and emotional depth; Capricorn brings security and ambition. A deeply stabilising love.",
    friendDesc: "A quietly powerful friendship of mutual support — Cancer nurtures; Capricorn protects. Both are deeply loyal and devoted.",
    workDesc: "An exceptionally effective working partnership — emotional intelligence meets strategic brilliance. Together they build something truly lasting.",
    soulDesc: "A soul bond of home and legacy — two signs who together create the foundation for something that endures beyond both of them."
  },
  "Cancer+Aquarius": {
    love: 50, friendship: 58, work: 62, soul: 55,
    loveDesc: "A challenging pairing — Cancer needs emotional intimacy; Aquarius needs intellectual freedom. A love that requires extraordinary patience and genuine curiosity.",
    friendDesc: "An unusual friendship that works when both are open to learning from each other's very different ways of seeing the world.",
    workDesc: "Cancer brings human empathy; Aquarius brings innovation and vision. A thoughtful and forward-thinking combination.",
    soulDesc: "A soul lesson in the balance of the personal and the universal — learning that both intimate love and broad compassion matter."
  },
  "Cancer+Pisces": {
    love: 92, friendship: 88, work: 75, soul: 92,
    loveDesc: "A dreamy, deeply soulful pairing of two water signs who understand each other's emotional world completely. Tender, intuitive, and profoundly connected.",
    friendDesc: "One of the most emotionally attuned friendships in the zodiac — both are empathetic, intuitive, and deeply caring.",
    workDesc: "Highly creative and emotionally intelligent — a beautiful partnership for any work that involves people, art, or healing.",
    soulDesc: "A soul connection of oceanic depth — two water signs who find in each other the kind of understanding that needs no words."
  },
  "Leo+Virgo": {
    love: 62, friendship: 68, work: 72, soul: 60,
    loveDesc: "Leo's grandeur meets Virgo's precision — a fascinating pairing of big energy and careful detail. Rewarding when Leo appreciates Virgo's depth and Virgo celebrates Leo's light.",
    friendDesc: "Virgo quietly supports Leo's ambitions; Leo helps Virgo step into the spotlight. A surprisingly warm and complementary friendship.",
    workDesc: "Leo leads with vision; Virgo perfects the details. One of the most effective creative-to-execution partnerships available.",
    soulDesc: "A soul lesson in the balance of radiance and refinement — learning that both the grand gesture and the careful detail matter."
  },
  "Leo+Libra": {
    love: 85, friendship: 85, work: 78, soul: 80,
    loveDesc: "A glamorous, socially brilliant, and romantically joyful pairing — both love beauty, harmony, and being adored. A love that shines brightly and warmly.",
    friendDesc: "One of the most socially magnetic friendships — charming, fun, and deeply appreciative of each other. A joy to be around.",
    workDesc: "Creative, charismatic, and people-centred — together they excel in any field that values style, communication, and social grace.",
    soulDesc: "A soul bond of beauty and light — two signs who find in each other the perfect blend of warmth, elegance, and joy."
  },
  "Leo+Scorpio": {
    love: 68, friendship: 65, work: 70, soul: 72,
    loveDesc: "A powerful, magnetic, and intensely dramatic pairing. Two strong signs who are drawn to each other — and who challenge each other to grow in equal measure.",
    friendDesc: "A fierce, loyal, and deeply passionate friendship — both are all-or-nothing personalities who give everything to those they care about.",
    workDesc: "Both are driven, determined, and magnetic leaders. When aligned, they are unstoppable — but they must manage power dynamics carefully.",
    soulDesc: "A soul bond of fire and depth — two forces of nature who, when they align, create something extraordinary and unforgettable."
  },
  "Leo+Sagittarius": {
    love: 90, friendship: 92, work: 82, soul: 88,
    loveDesc: "A glorious, joyful, expansive love between two fire signs who both love life, adventure, and celebrating everything. A relationship that feels like an eternal party.",
    friendDesc: "One of the most vibrant and joyful friendships in the zodiac — enthusiastic, generous, and endlessly fun together.",
    workDesc: "Inspiring, bold, and visionary — together they motivate everyone around them and reach for goals others consider impossible.",
    soulDesc: "Two radiant souls who find in each other the perfect companion for life's grandest adventures — a soul bond of pure, exuberant joy."
  },
  "Leo+Capricorn": {
    love: 60, friendship: 65, work: 78, soul: 62,
    loveDesc: "A challenging but potentially powerful pairing. Leo wants admiration and warmth; Capricorn shows love through dedication and achievement. Mutual respect is everything here.",
    friendDesc: "Capricorn grounds Leo's extravagance; Leo warms Capricorn's reserve. An unlikely but genuinely complementary friendship.",
    workDesc: "Leo provides inspiration and charisma; Capricorn provides strategy and discipline. Together they build something both brilliant and enduring.",
    soulDesc: "A soul lesson in the balance of heart and ambition — learning that true greatness requires both passion and patience."
  },
  "Leo+Aquarius": {
    love: 78, friendship: 80, work: 75, soul: 78,
    loveDesc: "Opposite signs with a magnetic, intellectually charged attraction. Leo is warm and personal; Aquarius is cool and universal. A love of beautiful contrasts.",
    friendDesc: "A dynamic and stimulating friendship — Leo brings warmth; Aquarius brings ideas. Together they challenge and inspire each other.",
    workDesc: "Leo provides leadership and heart; Aquarius provides innovation and vision. A forward-thinking and charismatic working team.",
    soulDesc: "A soul pairing of the individual and the collective — learning that personal love and universal compassion are not in conflict."
  },
  "Leo+Pisces": {
    love: 68, friendship: 72, work: 62, soul: 72,
    loveDesc: "A tender and romantic pairing — Leo's warmth envelops Pisces' sensitivity; Pisces' depth awakens Leo's more compassionate side. A love of genuine beauty.",
    friendDesc: "Leo protects and uplifts; Pisces inspires and softens. A warm, creative, and surprisingly nurturing friendship.",
    workDesc: "Leo provides leadership and direction; Pisces provides intuition and creative vision. A beautifully imaginative working partnership.",
    soulDesc: "A soul bond of light and dream — the radiant one and the visionary, creating together a world of both warmth and wonder."
  },
  "Virgo+Libra": {
    love: 65, friendship: 70, work: 75, soul: 62,
    loveDesc: "Both appreciate beauty, quality, and thoughtfulness — but Virgo is inward and analytical while Libra is social and harmonious. A gentle and refined pairing.",
    friendDesc: "A quietly pleasant and intellectually engaging friendship — both appreciate good taste, interesting conversation, and genuine kindness.",
    workDesc: "Virgo's precision combined with Libra's diplomacy makes for an exceptionally polished and effective professional partnership.",
    soulDesc: "A soul lesson in the balance of service and harmony — learning that both doing things right and making things beautiful matter."
  },
  "Virgo+Scorpio": {
    love: 80, friendship: 78, work: 80, soul: 78,
    loveDesc: "A deeply perceptive and intensely devoted pairing — both are private, analytical, and committed to depth over superficiality. A love of rare, quiet power.",
    friendDesc: "A fiercely loyal and profoundly understanding friendship — both are perceptive and private, and they see each other clearly.",
    workDesc: "Meticulous, strategic, and relentless — together they investigate, analyse, and execute with extraordinary precision and depth.",
    soulDesc: "A soul bond of quiet intensity — two signs who find in each other the rare experience of being both deeply understood and deeply trusted."
  },
  "Virgo+Sagittarius": {
    love: 55, friendship: 62, work: 65, soul: 58,
    loveDesc: "Virgo's precision meets Sagittarius' expansiveness — a fascinating but challenging pairing. Love here grows through genuine curiosity and deep mutual respect.",
    friendDesc: "Sagittarius expands Virgo's world; Virgo helps Sagittarius land their ideas. A complementary and growth-oriented friendship.",
    workDesc: "Virgo executes; Sagittarius envisions. A productive pairing when both respect each other's radically different but complementary approaches.",
    soulDesc: "A soul lesson in the balance of detail and vision — learning that both the map and the destination are essential to the journey."
  },
  "Virgo+Capricorn": {
    love: 88, friendship: 85, work: 95, soul: 82,
    loveDesc: "Two earth signs with a deep, natural resonance — both are devoted, practical, and deeply invested in building something real and lasting together.",
    friendDesc: "One of the most reliable and enduring friendships — grounded, loyal, and built on shared values of integrity and hard work.",
    workDesc: "The gold standard of working partnerships — both are disciplined, detail-oriented, and committed to excellence. Together they achieve the extraordinary.",
    soulDesc: "A soul bond of quiet, lasting devotion — two builders who find in each other the most trusted partner they have ever known."
  },
  "Virgo+Aquarius": {
    love: 55, friendship: 62, work: 70, soul: 58,
    loveDesc: "An intellectually stimulating but emotionally complex pairing. Both are analytical, but in very different ways — this love grows through genuine open-mindedness.",
    friendDesc: "A friendship of fascinating intellectual exchange — both are sharp, thoughtful, and genuinely interested in understanding the world.",
    workDesc: "Virgo provides precision and reliability; Aquarius provides innovation and unconventional thinking. A stimulating and effective intellectual partnership.",
    soulDesc: "A soul lesson in the balance of the practical and the visionary — learning that both what is and what could be matter equally."
  },
  "Virgo+Pisces": {
    love: 78, friendship: 75, work: 72, soul: 80,
    loveDesc: "Opposite signs with a beautiful, complementary attraction — Virgo's practicality grounds Pisces' dreams; Pisces' magic softens Virgo's edges. A healing love.",
    friendDesc: "Virgo cares for Pisces' practical needs; Pisces nourishes Virgo's soul. A quietly profound and deeply supportive friendship.",
    workDesc: "Virgo structures; Pisces creates. A beautiful pairing of craft and vision — when both are aligned, the results are extraordinary.",
    soulDesc: "A soul bond of earth and water, the tangible and the transcendent — two signs who together find both meaning and magic."
  },
  "Libra+Scorpio": {
    love: 68, friendship: 65, work: 68, soul: 70,
    loveDesc: "A complex and magnetic pairing — Libra's lightness meets Scorpio's depth. Fascinating, challenging, and ultimately transformative when both commit fully.",
    friendDesc: "An intriguing and surprisingly loyal friendship — Scorpio's intensity is balanced by Libra's grace, and both are fiercely devoted once trust is built.",
    workDesc: "Libra provides diplomacy and social grace; Scorpio provides strategic depth and determination. A sophisticated and effective working team.",
    soulDesc: "A soul lesson in the balance of light and shadow — learning to hold both beauty and depth without losing either."
  },
  "Libra+Sagittarius": {
    love: 82, friendship: 85, work: 75, soul: 80,
    loveDesc: "A joyful, optimistic, and intellectually vibrant love — both are social, freedom-loving, and share a genuine delight in life's pleasures and possibilities.",
    friendDesc: "A wonderfully fun and expansive friendship — both love adventure, ideas, and the sheer joy of being alive. Endlessly good company for each other.",
    workDesc: "Creative, social, and optimistic — together they inspire others and tackle any challenge with charm and enthusiasm.",
    soulDesc: "A soul bond of joy and expansion — two signs who find in each other the perfect companion for life's most beautiful adventures."
  },
  "Libra+Capricorn": {
    love: 58, friendship: 62, work: 75, soul: 58,
    loveDesc: "A challenging pairing that requires real effort. Libra is social and relationship-oriented; Capricorn is focused and achievement-driven. Mutual respect unlocks potential.",
    friendDesc: "An unlikely friendship that works when both appreciate each other's very different but complementary strengths.",
    workDesc: "Libra provides social grace and diplomacy; Capricorn provides strategy and discipline. A polished and effective professional pairing.",
    soulDesc: "A soul lesson in the balance of relationship and ambition — learning that both love and achievement are worthy pursuits."
  },
  "Libra+Aquarius": {
    love: 88, friendship: 90, work: 85, soul: 85,
    loveDesc: "Two air signs in beautiful harmony — intellectually alive, socially brilliant, and deeply respectful of each other's need for freedom and authenticity.",
    friendDesc: "One of the most natural and enjoyable friendships — both are social, idealistic, and genuinely interested in making the world a better place.",
    workDesc: "Creative, communicative, and forward-thinking — together they are advocates, innovators, and inspiring collaborators.",
    soulDesc: "A soul bond of ideals and ideas — two air signs who find in each other a rare intellectual and spiritual kinship."
  },
  "Libra+Pisces": {
    love: 75, friendship: 72, work: 65, soul: 75,
    loveDesc: "A romantic, dreamy, and beautifully tender pairing — both are idealists who believe in love and beauty. A relationship that feels like a living poem.",
    friendDesc: "A gentle, creative, and deeply empathetic friendship — both are natural romantics who bring out each other's softer, more imaginative side.",
    workDesc: "Creative and people-centred — both bring beauty, empathy, and vision to their work. They need practical support to ground their shared dreams.",
    soulDesc: "A soul bond of beauty and transcendence — two romantics who together create a world of extraordinary grace and tenderness."
  },
  "Scorpio+Sagittarius": {
    love: 62, friendship: 65, work: 65, soul: 65,
    loveDesc: "A complex and passionate pairing — Scorpio's depth meets Sagittarius' freedom. Intensely attracted but fundamentally different — love here demands real commitment.",
    friendDesc: "A fascinating friendship of depth and breadth — Scorpio digs deep; Sagittarius reaches wide. Together they cover extraordinary ground.",
    workDesc: "Scorpio provides focus and strategic depth; Sagittarius provides vision and optimism. A powerful combination when trust is established.",
    soulDesc: "A soul lesson in the balance of depth and freedom — learning that truth can be found both in the depths and on the open road."
  },
  "Scorpio+Capricorn": {
    love: 85, friendship: 82, work: 90, soul: 85,
    loveDesc: "A deeply powerful and quietly intense pairing — both are private, ambitious, and fiercely loyal. A love built on absolute trust and mutual respect.",
    friendDesc: "One of the most unbreakable friendships — both are loyal to the core and will move mountains for those they love.",
    workDesc: "Relentless, strategic, and deeply committed — together they are one of the most formidably effective working partnerships in the zodiac.",
    soulDesc: "A soul bond of power and depth — two forces of nature who find in each other the most trusted and devoted ally they have ever known."
  },
  "Scorpio+Aquarius": {
    love: 55, friendship: 58, work: 68, soul: 60,
    loveDesc: "A challenging and intensely fascinating pairing — Scorpio's emotional depth meets Aquarius' detached intellectualism. A love that requires extraordinary understanding.",
    friendDesc: "An unusual but intensely interesting friendship — both are drawn to the unconventional and share a fascination with the hidden and the unexplored.",
    workDesc: "Scorpio provides depth and strategic thinking; Aquarius provides innovation and unconventional vision. A powerful and potentially ground-breaking partnership.",
    soulDesc: "A soul lesson in the balance of the personal and the transpersonal — learning that both intimate depth and universal vision have their place."
  },
  "Scorpio+Pisces": {
    love: 92, friendship: 88, work: 75, soul: 95,
    loveDesc: "One of the most soulful and profound pairings in the zodiac — two water signs who meet at the deepest level of feeling, intuition, and spiritual connection.",
    friendDesc: "A bond of extraordinary emotional depth and mutual understanding — both are empathetic, intuitive, and fiercely devoted to those they love.",
    workDesc: "Intuitive, creative, and deeply committed — a partnership of remarkable emotional intelligence and shared dedication.",
    soulDesc: "One of the deepest soul connections possible — two water signs who find in each other the kind of love that transcends time, logic, and every lifetime."
  },
  "Sagittarius+Capricorn": {
    love: 58, friendship: 65, work: 72, soul: 60,
    loveDesc: "A challenging but growth-rich pairing — Sagittarius wants freedom and adventure; Capricorn wants structure and achievement. Love here is a beautiful, ongoing journey.",
    friendDesc: "Capricorn grounds Sagittarius' grand visions; Sagittarius inspires Capricorn to dream bigger. A surprisingly complementary friendship.",
    workDesc: "Sagittarius provides vision and enthusiasm; Capricorn provides strategy and discipline. One of the most effective vision-to-execution partnerships.",
    soulDesc: "A soul lesson in the balance of freedom and responsibility — learning that both the open road and the solid foundation are essential."
  },
  "Sagittarius+Aquarius": {
    love: 85, friendship: 90, work: 82, soul: 85,
    loveDesc: "A free-spirited, intellectually alive, and genuinely exciting love — both value independence, ideas, and the joy of exploring life together without constraints.",
    friendDesc: "One of the most stimulating and joyful friendships — both are curious, progressive, and endlessly inspiring to each other.",
    workDesc: "Visionary, innovative, and boldly unconventional — together they challenge the status quo and inspire everyone around them.",
    soulDesc: "A soul bond of freedom and vision — two seekers who find in each other the perfect companion for life's grandest philosophical adventures."
  },
  "Sagittarius+Pisces": {
    love: 70, friendship: 72, work: 62, soul: 75,
    loveDesc: "A dreamy, philosophical, and spiritually rich pairing — both are seekers of truth and beauty, drawn together by a shared sense of wonder and possibility.",
    friendDesc: "A whimsical and deeply meaningful friendship — both are imaginative, compassionate, and endlessly curious about life's deeper meaning.",
    workDesc: "Both are visionaries, but they need grounding and structure to turn their shared dreams into something tangible and real.",
    soulDesc: "A soul bond of seekers — two signs who together journey toward truth, beauty, and the kind of wisdom that only comes from truly living."
  },
  "Capricorn+Aquarius": {
    love: 58, friendship: 65, work: 75, soul: 60,
    loveDesc: "A challenging pairing of tradition and revolution — Capricorn builds on what is; Aquarius envisions what could be. A love that requires genuine mutual respect.",
    friendDesc: "An unlikely but stimulating friendship — Capricorn grounds Aquarius' visions; Aquarius challenges Capricorn's assumptions.",
    workDesc: "Capricorn provides discipline and long-term thinking; Aquarius provides innovation and unconventional solutions. A powerful combination.",
    soulDesc: "A soul lesson in the balance of the established and the revolutionary — learning that both preservation and transformation serve the greater good."
  },
  "Capricorn+Pisces": {
    love: 80, friendship: 78, work: 75, soul: 82,
    loveDesc: "A beautifully complementary pairing — Capricorn's strength gives Pisces safe ground to dream; Pisces' magic softens Capricorn's sometimes rigid exterior.",
    friendDesc: "A deeply supportive and surprisingly tender friendship — Capricorn protects; Pisces inspires. Both feel genuinely safe with each other.",
    workDesc: "Capricorn provides structure and ambition; Pisces provides creativity and intuition. A beautifully balanced and productive partnership.",
    soulDesc: "A soul bond of earth and water — the builder and the dreamer, finding in each other the perfect complement to make something both real and beautiful."
  },
  "Aquarius+Pisces": {
    love: 65, friendship: 70, work: 65, soul: 72,
    loveDesc: "A dreamy, idealistic, and compassionate pairing — both care deeply about humanity and share a vision of a more beautiful world. A gentle and inspiring love.",
    friendDesc: "A kind, creative, and genuinely caring friendship — both are empathetic idealists who bring out each other's most compassionate and imaginative qualities.",
    workDesc: "Both are visionaries — Aquarius through innovation, Pisces through intuition. Together they need grounding to turn their beautiful shared ideas into reality.",
    soulDesc: "A soul bond of the visionary and the mystic — two signs who together hold the space between what is possible and what is transcendent."
  }
};

// === GET COMPATIBILITY ===
function getCompatibility(sign1, sign2) {
  const key1 = `${sign1}+${sign2}`;
  const key2 = `${sign2}+${sign1}`;
  return compatibilityData[key1] || compatibilityData[key2] || null;
}

function getStars(score) {
  const filled = Math.round(score / 20);
  return '★'.repeat(filled) + '☆'.repeat(5 - filled);
}

// === ZODIAC SYMBOLS ===
const zodiacSymbols = {
  "Aries": "♈", "Taurus": "♉", "Gemini": "♊", "Cancer": "♋",
  "Leo": "♌", "Virgo": "♍", "Libra": "♎", "Scorpio": "♏",
  "Sagittarius": "♐", "Capricorn": "♑", "Aquarius": "♒", "Pisces": "♓"
};

// === HOROSCOPE LOGIC ===
document.getElementById('check-btn').addEventListener('click', () => {
  const dob1 = document.getElementById('dob1').value;
  const dob2 = document.getElementById('dob2').value;

  if (!dob1 || !dob2) {
    alert('Please enter both birthdays! (DD/MM)');
    return;
  }

  const [day1, month1] = dob1.split('/').map(Number);
  const [day2, month2] = dob2.split('/').map(Number);
  const sign1 = getZodiac(month1, day1);
  const sign2 = getZodiac(month2, day2);
  const data = getCompatibility(sign1, sign2);

  if (!data) {
    document.getElementById('horoscope-result').innerHTML = '<p>Compatibility data not found.</p>';
    return;
  }

  const overall = Math.round((data.love + data.friendship + data.work + data.soul) / 4);

  document.getElementById('horoscope-result').innerHTML = `
    <div class="compat-header">
      <div class="compat-signs">
        <span class="zsymbol">${zodiacSymbols[sign1]}</span>
        <span class="zname">${sign1}</span>
      </div>
      <div class="compat-heart">♡</div>
      <div class="compat-signs">
        <span class="zsymbol">${zodiacSymbols[sign2]}</span>
        <span class="zname">${sign2}</span>
      </div>
    </div>
    <div class="overall-score">
      <div class="overall-num">${overall}%</div>
      <div class="overall-stars">${getStars(overall)}</div>
      <div class="overall-label">Overall Compatibility</div>
    </div>
    <div class="compat-grid">
      <div class="compat-card">
        <div class="compat-label">♡ Love</div>
        <div class="compat-score">${data.love}% ${getStars(data.love)}</div>
        <div class="compat-desc">${data.loveDesc}</div>
      </div>
      <div class="compat-card">
        <div class="compat-label">✦ Friendship</div>
        <div class="compat-score">${data.friendship}% ${getStars(data.friendship)}</div>
        <div class="compat-desc">${data.friendDesc}</div>
      </div>
      <div class="compat-card">
        <div class="compat-label">⚡ Work</div>
        <div class="compat-score">${data.work}% ${getStars(data.work)}</div>
        <div class="compat-desc">${data.workDesc}</div>
      </div>
      <div class="compat-card">
        <div class="compat-label">🌙 Soul</div>
        <div class="compat-score">${data.soul}% ${getStars(data.soul)}</div>
        <div class="compat-desc">${data.soulDesc}</div>
      </div>
    </div>
  `;
});