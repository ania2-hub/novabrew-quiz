# NovaBrew Coffee Taste Profile Quiz - Requirements

## Overview
A web-based personality quiz for NovaBrew subscribers that identifies each user's coffee personality and recommends matching coffees from the NovaBrew lineup. The quiz should feel playful, premium, and shareable while still supporting a real business goal: making the subscription feel more personal from day one.

## Personality Types

### Bold Explorer
Bold Explorer subscribers want intensity, momentum, and strong flavor. They are confident in their taste, drawn to dramatic coffee experiences, and not afraid of a darker roast or a stronger finish.

### Smooth Operator
Smooth Operator subscribers like balance, polish, and consistency. They want something elegant and easy to love, with enough quality to feel elevated but without needing the experience to be loud or extreme.

### Cozy Classic
Cozy Classic subscribers want comfort, warmth, and familiarity. Their ideal cup feels like a slow morning, a favorite sweater, or a reliable ritual they can look forward to.

### Wild Card
Wild Card subscribers are curious experimenters. They are energized by novelty, unusual flavor profiles, and the chance to discover something surprising or unconventional.

### Bright Idealist
Bright Idealist subscribers are drawn to freshness, optimism, and light-filled flavor. They like coffees that feel lively, uplifting, and vibrant rather than heavy or intense.

### Craft Purist
Craft Purist subscribers care about intention, quality, and the feeling that something was thoughtfully made. They value precision, story, and craftsmanship over flashiness.

## Coffee Pairings

### Bold Explorer
- **Midnight Summit** - Dark roast, smoky, bold, Indonesian origin
- **Campfire Stories** - Dark roast with cozy s'mores notes
- **Double Down** - Extra-bold espresso roast, thick crema, intense finish

### Smooth Operator
- **Velvet Fog** - Medium-light, creamy mouthfeel, almond and cocoa notes
- **Golden Hour** - Light-medium, honey processed, sweet and smooth

### Cozy Classic
- **Sunday Paper** - Medium roast, hazelnut and vanilla, comfort-forward
- **Velvet Fog** - Creamy, mellow, and approachable

### Wild Card
- **Wildflower** - Light roast, floral and fruity, bright acidity
- **Off the Map** - Experimental processing, rotating micro-lot, unexpected flavor

### Bright Idealist
- **Golden Hour** - Sweet, smooth, and optimistic in tone
- **Wildflower** - Bright, floral, energetic, and expressive

### Craft Purist
- **Sunrise Blend** - Balanced, carefully composed, caramel and chocolate notes
- **The Purist** - Clean single-origin Kenyan AA with no unnecessary frills

## Question Style
The quiz should use a mix of:
- **Lifestyle questions** that make the user feel seen in a warm, relatable way
- **Abstract questions** that feel premium, visual, and slightly elevated

The tone should feel playful and brand-forward, not clinical. It should feel like a personality quiz first and a coffee recommendation engine second.

## Results Display
The results page should show **percentages across all six personality types** rather than only a single result. The user should still receive one dominant identity, but the percentages should make the outcome feel more nuanced and personal.

## Quiz Questions

### Question 1: Your ideal Saturday morning looks like...
- A) A strong start, a packed schedule, and coffee that keeps up  
  Mapping: Bold Explorer
- B) Slow music, clean sunlight, and a routine that just feels right  
  Mapping: Smooth Operator
- C) Soft blankets, nowhere to be, and a mug you hold with two hands  
  Mapping: Cozy Classic
- D) Wandering somewhere new with no real plan  
  Mapping: Wild Card
- E) A bright kitchen, fresh air, and something that feels optimistic  
  Mapping: Bright Idealist
- F) A quiet ritual done perfectly, down to the smallest detail  
  Mapping: Craft Purist

### Question 2: Pick the space that feels most like you.
- A) A dramatic rooftop at night  
  Mapping: Bold Explorer
- B) A beautifully designed lounge with everything in balance  
  Mapping: Smooth Operator
- C) A cozy cabin with warm lamps and overstuffed chairs  
  Mapping: Cozy Classic
- D) An art gallery opening where you know nobody  
  Mapping: Wild Card
- E) A sunny greenhouse filled with color  
  Mapping: Bright Idealist
- F) A minimalist studio with handcrafted objects  
  Mapping: Craft Purist

### Question 3: When you try something new, your instinct is to...
- A) Go bold and commit fully  
  Mapping: Bold Explorer
- B) Choose the option that feels polished and reliable  
  Mapping: Smooth Operator
- C) Stick with what sounds comforting and familiar  
  Mapping: Cozy Classic
- D) Pick the weirdest one on the menu  
  Mapping: Wild Card
- E) Go for whatever feels fresh and uplifting  
  Mapping: Bright Idealist
- F) Pick the one that feels the most thoughtfully made  
  Mapping: Craft Purist

### Question 4: Which phrase sounds most like your energy?
- A) "Let's make it stronger."  
  Mapping: Bold Explorer
- B) "Keep it smooth."  
  Mapping: Smooth Operator
- C) "Make it comforting."  
  Mapping: Cozy Classic
- D) "Surprise me."  
  Mapping: Wild Card
- E) "I want something bright."  
  Mapping: Bright Idealist
- F) "I care how it's made."  
  Mapping: Craft Purist

### Question 5: Pick a travel vibe.
- A) Late-night city with intense energy  
  Mapping: Bold Explorer
- B) Stylish boutique hotel with perfect service  
  Mapping: Smooth Operator
- C) Quiet lake house with a fireplace  
  Mapping: Cozy Classic
- D) Remote town you found by accident  
  Mapping: Wild Card
- E) Coastal sunrise and open windows  
  Mapping: Bright Idealist
- F) Thoughtfully planned cultural trip with a curated itinerary  
  Mapping: Craft Purist

### Question 6: Which kind of gift feels most like you?
- A) Something bold and unforgettable  
  Mapping: Bold Explorer
- B) Something elegant you will use all the time  
  Mapping: Smooth Operator
- C) Something soft, warm, and personal  
  Mapping: Cozy Classic
- D) Something unusual no one else would pick  
  Mapping: Wild Card
- E) Something cheerful and full of life  
  Mapping: Bright Idealist
- F) Something handcrafted with a story behind it  
  Mapping: Craft Purist

### Question 7: Your perfect coffee experience should feel...
- A) Intense  
  Mapping: Bold Explorer
- B) Effortless  
  Mapping: Smooth Operator
- C) Comforting  
  Mapping: Cozy Classic
- D) Unexpected  
  Mapping: Wild Card
- E) Vibrant  
  Mapping: Bright Idealist
- F) Intentional  
  Mapping: Craft Purist

## Quiz Logic
- Each answer maps to one personality type
- The quiz should track a running score across all six personalities
- At the end, show the user a percentage breakdown across all six
- The highest percentage should be treated as their primary coffee personality
- The top one or two personalities should drive the coffee recommendation section

## Visual Style
The selected direction is **Playful**.

Design notes:
- Warm, inviting, and shareable
- Premium enough to feel like a polished consumer brand, not a cheap internet quiz
- Soft rounded shapes, friendly layout, and a visually expressive interface
- Strong personality without feeling childish

Color direction:
- Cream background
- Peach and warm golden secondary tones
- Terracotta for buttons and key call-to-action elements
- Berry accents for personality-rich moments
- Espresso-brown text for warmth and readability

Reference files in project:
- `style-preview-playful.html`
- `playful-color-palette.svg`

## Extra Features
- **Result images:** Yes. Each personality result should include an image.
- **Icons next to answer options:** Yes. Each answer option should include a small icon to improve scannability and personality.
- **Percentages on results page:** Yes.

## Technical Notes
- Build with Next.js and Tailwind CSS
- Mobile responsive and easy to use on phones
- Single-page app feel with smooth transitions between questions
- Final results page should feel shareable and visually satisfying
- Recommendation section should connect the personality outcome to the suggested NovaBrew coffees
