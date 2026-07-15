import { ALIGNMENT_SERVICE_PHOTOS, BODY_SHOP_PHOTOS, WHEEL_BALANCING_PHOTOS } from './shopImages';

export const SERVICES = [
  {
    slug: 'body-shop',
    icon: '🎨',
    shortTitle: 'Vehicle Body Shop',
    title: 'Vehicle Body Shop & Paint Sales',
    tagline: 'Factory-finish painting, baking, and premium automotive paint supply.',
    heroDesc: 'Johnfield Services operates a full professional body shop with a modern spray booth and oven-baking facility. We restore your vehicle\'s exterior to showroom condition — and we also supply the industry-grade paint brands professionals trust.',
    tags: ['Sikkens', 'DYNA', 'KAPCI', 'Spray Painting', 'Oven Baking'],
    featured: true,
    gallery: BODY_SHOP_PHOTOS,
    sections: [
      {
        icon: '🔫',
        title: 'Professional Painting & Baking',
        body: `Our body shop team uses a controlled spray booth environment to apply paint with precision, eliminating dust contamination and uneven coverage. After painting, vehicles go through our oven-baking process — heat-curing the paint to achieve factory-hardness, deep gloss, and long-lasting durability.

We offer full resprays, panel repairs, and colour-matching services for all vehicle makes and models — local and imported. Our technicians are trained in proper surface preparation: sanding, priming, and sealing before any paint is applied.`,
      },
      {
        icon: '🛒',
        title: 'Premium Paint Brand Sales',
        body: `Johnfield Services is an authorised supplier of three of the most trusted automotive paint brands in the industry:

**Sikkens** — A globally recognised brand known for superior colour accuracy and long-term durability. Widely used by professional bodyshops worldwide.

**DYNA** — A high-performance automotive coating brand offering excellent coverage, fast dry times, and outstanding finish quality.

**KAPCI** — A leading paint system with a comprehensive product range including primers, basecoats, clearcoats, and refinishing products.

Whether you run a bodyshop and need bulk supply, or you're an individual looking for a specific product, we stock and sell these brands at competitive prices.`,
      },
    ],
    faqs: [
      { q: 'How long does a full respray take?', a: 'Depending on the vehicle size and panel count, a full respray typically takes 3–5 business days including preparation, painting, and baking.' },
      { q: 'Do you do panel repairs or only full resprays?', a: 'We do both — from single-panel repairs and scratch removal to complete full-body resprays.' },
      { q: 'Can I buy paint without having my car painted here?', a: 'Absolutely. We sell Sikkens, DYNA, and KAPCI products to workshops and individuals independently of our painting service.' },
      { q: 'Do you match custom or original factory colours?', a: 'Yes. We use professional colour-matching equipment to replicate original manufacturer colours and can also apply custom colours on request.' },
    ],
  },
  {
    slug: 'battery-sales',
    icon: '🔋',
    shortTitle: 'Battery Sales',
    title: 'Battery Sales — Tubular & Lithium',
    tagline: 'Reliable batteries for all vehicle types, with warranty coverage.',
    heroDesc: 'We stock and sell high-quality tubular and lithium batteries suited to a wide range of vehicles and applications. Get a dependable battery with the peace of mind of warranty coverage.',
    tags: ['Tubular Batteries', 'Lithium Batteries', 'All Vehicles', 'Warranty'],
    featured: false,
    gallery: [
      { icon: '🔋', caption: 'Tubular Battery Stock' },
      { icon: '⚡', caption: 'Lithium Battery Range' },
      { icon: '🔧', caption: 'Free On-Site Installation' },
    ],
    sections: [
      {
        icon: '⚡',
        title: 'Tubular Batteries',
        body: `Tubular batteries are built for deep-cycle applications — they can be discharged and recharged many times without significant capacity loss. They are ideal for vehicles and backup systems that require sustained power output over extended periods.

We carry tubular batteries in various amp-hour ratings to match your vehicle's requirements. Our team will help you select the right battery based on your car model, engine size, and usage pattern.`,
      },
      {
        icon: '🔌',
        title: 'Lithium Batteries',
        body: `Lithium batteries offer superior energy density, significantly lighter weight, and longer service life compared to traditional lead-acid batteries. They charge faster, discharge more evenly, and maintain voltage stability under heavy load.

Our lithium battery range is suitable for modern vehicles with high electronic demands — start-stop systems, heavy infotainment loads, and high-draw accessories. Ask our team which lithium option is compatible with your vehicle.`,
      },
    ],
    faqs: [
      { q: 'How do I know which battery fits my car?', a: 'Bring your vehicle in or tell us the make, model, and year. We\'ll identify the correct battery specification for you.' },
      { q: 'Do you install the battery as well?', a: 'Yes, we can install the battery for you on-site at no extra charge.' },
      { q: 'What warranty comes with the batteries?', a: 'Warranty terms vary by brand and battery type. Our team will provide you with full warranty documentation at the point of purchase.' },
      { q: 'Can I buy a battery without coming in?', a: 'Contact us via WhatsApp or phone to confirm stock and arrange pickup or delivery options.' },
    ],
  },
  {
    slug: 'wheel-balancing',
    icon: '⚙️',
    shortTitle: 'Wheel Balancing',
    title: 'Professional Wheel Balancing',
    tagline: 'Eliminate vibrations, extend tyre life, and restore ride comfort.',
    heroDesc: 'Unbalanced wheels cause vibration, uneven tyre wear, and unnecessary stress on your suspension. Our precision wheel balancing service corrects weight imbalances across all four wheels for a smoother, safer drive.',
    tags: ['All Tyre Sizes', 'Fast Service', 'All Vehicles'],
    featured: false,
    gallery: WHEEL_BALANCING_PHOTOS,
    sections: [
      {
        icon: '🔄',
        title: 'What is Wheel Balancing?',
        body: `Wheel balancing ensures that the weight of each wheel-and-tyre assembly is evenly distributed around the axle. Even small imbalances — as little as a few grams — can cause noticeable vibration at highway speeds, premature tyre wear on specific spots, and increased wear on wheel bearings and suspension components.

We mount your wheel on a computerised balancing machine that spins it at speed and identifies where counterweights need to be applied. Small weights are then attached to the rim at precise locations to achieve perfect balance.`,
      },
      {
        icon: '🚗',
        title: 'When Should You Balance Your Wheels?',
        body: `You should get your wheels balanced if you notice:

- Steering wheel vibration at speeds above 80 km/h
- Vibration felt through the seat or floor
- Uneven or patchy tyre wear
- New tyres have been fitted
- After any tyre puncture repair
- Every 10,000 – 15,000 km as routine maintenance

Wheel balancing is quick — most vehicles are done in 30–45 minutes — and it significantly extends the life of your tyres and suspension components.`,
      },
    ],
    faqs: [
      { q: 'How long does wheel balancing take?', a: 'Typically 30–45 minutes for all four wheels.' },
      { q: 'How often should I balance my wheels?', a: 'We recommend balancing every 10,000–15,000 km, or any time you fit new tyres or notice vibration.' },
      { q: 'Is wheel balancing the same as wheel alignment?', a: 'No — balancing corrects weight imbalances in the wheel-tyre assembly. Alignment corrects the angle at which your tyres contact the road. Both are important and we offer both services.' },
      { q: 'Do I need to book an appointment?', a: 'Walk-ins are welcome but booking via WhatsApp is recommended to reduce waiting time.' },
    ],
  },
  {
    slug: 'wheel-alignment',
    icon: '🎯',
    shortTitle: 'Wheel Alignment',
    title: 'Digital & Analogue Wheel Alignment',
    tagline: 'Precision alignment to protect your tyres, fuel economy, and steering.',
    heroDesc: 'Incorrect wheel alignment causes uneven tyre wear, pulls to one side, and reduces fuel efficiency. We offer both digital and analogue alignment to suit all vehicle types — restoring factory-spec geometry for safer, more efficient driving.',
    tags: ['Digital Alignment', 'Analogue Alignment', 'All Vehicles', 'Fuel Saving'],
    featured: false,
    gallery: ALIGNMENT_SERVICE_PHOTOS,
    sections: [
      {
        icon: '📐',
        title: 'Digital Wheel Alignment',
        body: `Digital alignment uses computerised sensors attached to each wheel to measure and display alignment angles in real time on a screen. The technician can see the exact deviation from manufacturer specifications and make precise adjustments accordingly.

Digital alignment is highly accurate and provides a printed report showing before-and-after measurements — so you can see exactly what was corrected. It's the recommended option for modern vehicles and any car where precision handling is important.`,
      },
      {
        icon: '🔧',
        title: 'Analogue Wheel Alignment',
        body: `Analogue alignment uses mechanical gauges and string-line methods to check and correct wheel angles. While it doesn't produce a digital readout, it remains a reliable and cost-effective method for straightforward alignment corrections on older or simpler vehicle setups.

Our technicians are skilled in both methods and will recommend the approach best suited to your vehicle type and budget.`,
      },
    ],
    faqs: [
      { q: 'How do I know my alignment is off?', a: 'Signs include: the car pulling to one side, uneven tyre wear (more wear on the inner or outer edge), a crooked steering wheel when driving straight, or a squealing sound when turning.' },
      { q: 'How long does alignment take?', a: 'Usually 45–60 minutes depending on the method and how much adjustment is needed.' },
      { q: 'How often should I get an alignment check?', a: 'At least once a year, after hitting a large pothole or kerb, after any suspension repairs, or when fitting new tyres.' },
      { q: 'Will alignment fix my uneven tyre wear?', a: 'It will stop further uneven wear from occurring. Existing wear patterns on the tyres cannot be reversed, but we can advise if tyres need replacing.' },
    ],
  },
  {
    slug: 'auto-mechanics',
    icon: '🔧',
    shortTitle: 'Auto Mechanics',
    title: 'Comprehensive Auto Mechanics',
    tagline: 'Engine diagnostics, servicing, brakes, suspension — all in-house.',
    heroDesc: 'Our mechanical team handles everything from routine servicing to complex engine and suspension repairs. We use proper diagnostic tools and quality parts to get your vehicle back on the road — fixed right the first time.',
    tags: ['Engine Repair', 'Servicing', 'Brakes', 'Suspension', 'Diagnostics'],
    featured: false,
    gallery: [
      { icon: '🏎️', caption: 'Engine Diagnostics & Servicing' },
      { icon: '🛑', caption: 'Brake & Suspension Repairs' },
      { icon: '🔩', caption: 'Quality Parts, Fair Prices' },
    ],
    sections: [
      {
        icon: '🏎️',
        title: 'Engine & General Servicing',
        body: `We provide complete engine servicing including oil and filter changes, air filter replacement, spark plug replacement, coolant flush, fuel system cleaning, and timing belt inspection. Regular servicing extends engine life and maintains manufacturer warranty validity.

For engine faults, our technicians perform thorough diagnostics — checking for error codes, inspecting belts, gaskets, sensors, and identifying the root cause of issues like overheating, unusual noise, loss of power, and rough idling.`,
      },
      {
        icon: '🛑',
        title: 'Brakes & Suspension',
        body: `Safe stopping and comfortable driving depend on well-maintained brakes and suspension. We inspect and service brake pads, discs, drums, callipers, and brake fluid. We also handle full suspension work — shock absorbers, struts, ball joints, control arms, bushings, and steering rack components.

If your vehicle is pulling, bouncing, riding rough, or making clunking noises, bring it in for a full undercarriage inspection. We'll identify the issue and provide a clear quote before any work begins.`,
      },
    ],
    faqs: [
      { q: 'Do you service all vehicle brands?', a: 'Yes — we service Nigerian-assembled vehicles, Japanese, European, American, and Korean makes. Both petrol and diesel engines.' },
      { q: 'Do you use original or aftermarket parts?', a: 'We use quality aftermarket parts that meet or exceed OEM specifications. We can also source original parts on request.' },
      { q: 'Can you diagnose dashboard warning lights?', a: 'Yes. We have OBD diagnostic tools that read fault codes from the vehicle\'s ECU, allowing us to identify issues accurately.' },
      { q: 'How long does a full service take?', a: 'A standard service (oil, filters, checks) takes 1–2 hours. More complex repairs depend on the fault — we\'ll give you a time estimate after diagnosis.' },
    ],
  },
  {
    slug: 'auto-electric-wiring',
    icon: '⚡',
    shortTitle: 'Auto Electric Wiring',
    title: 'Auto Electric Wiring & Diagnostics',
    tagline: 'From faulty sensors to full rewires — expert automotive electricians.',
    heroDesc: 'Modern vehicles are packed with electronics. Our auto electrical team diagnoses and repairs faults in wiring, sensors, alternators, starters, and all vehicle electrical systems — quickly and accurately.',
    tags: ['Wiring Diagnosis', 'Rewiring', 'Sensors', 'Alternators', 'Starters'],
    featured: false,
    gallery: [
      { icon: '🔍', caption: 'Professional Fault Diagnosis' },
      { icon: '🔌', caption: 'Wiring & Component Repairs' },
      { icon: '⚡', caption: 'Alternators, Starters & Sensors' },
    ],
    sections: [
      {
        icon: '🔍',
        title: 'Electrical Diagnosis',
        body: `Electrical faults can be difficult to track down without the right tools and expertise. Our technicians use professional diagnostic equipment to trace faults in the vehicle's wiring harness, fuse boxes, relays, grounds, and electronic control modules.

Common issues we diagnose and fix include: battery drain (parasitic draw), intermittent electrical faults, non-functioning accessories (windows, lights, AC, radio), sensor failures, and warning lights caused by electrical faults.`,
      },
      {
        icon: '🔌',
        title: 'Wiring & Component Repairs',
        body: `From a single faulty wire or blown fuse to complete electrical rewiring, we handle all levels of automotive electrical work. We repair or replace:

- Alternators and voltage regulators
- Starter motors and solenoids
- Lighting systems (headlights, indicators, interior)
- Sensor replacements (O2, ABS, crankshaft, camshaft)
- Ignition systems
- Vehicle security/immobiliser systems
- Custom wiring installations (sound systems, trackers, accessories)

All wiring work uses properly rated automotive wire with correct connectors and protective sheathing.`,
      },
    ],
    faqs: [
      { q: 'My car battery keeps draining overnight — can you fix this?', a: 'Yes. This is usually a parasitic draw fault — something is staying on when the car is off. We use amp clamp testing to identify the circuit and fix the fault.' },
      { q: 'Can you install aftermarket electronics like trackers or dashcams?', a: 'Yes — we install and wire a variety of aftermarket accessories including GPS trackers, dashcams, reversing cameras, and audio systems.' },
      { q: 'My alternator warning light is on — is it safe to drive?', a: 'No. An alternator fault means your battery is not charging. The vehicle can stall at any time. Bring it in immediately or call us for advice.' },
      { q: 'Do you work on both old and new vehicles?', a: 'Yes — from older vehicles with simple wiring to modern vehicles with CAN-bus and complex electronic systems.' },
    ],
  },
  {
    slug: 'tyre-inflation',
    icon: '💨',
    shortTitle: 'Tyre Inflation (N₂)',
    title: 'Tyre Inflation with N₂ (Nitrogen) Gas',
    tagline: 'Better pressure retention, cooler tyres, and improved fuel economy.',
    heroDesc: 'Nitrogen tyre inflation is a simple upgrade that delivers real performance benefits. N₂ molecules are larger than oxygen, so they pass through tyre walls more slowly — keeping your pressure stable for longer and running your tyres cooler.',
    tags: ['Nitrogen Gas', 'All Tyre Types', 'Fuel Efficiency', 'Safety'],
    featured: false,
    gallery: [
      { icon: '💨', caption: 'Pure N₂ Tyre Inflation' },
      { icon: '🌡️', caption: 'Cooler-Running, Stable Pressure' },
      { icon: '🏎️', caption: 'Better Handling & Fuel Economy' },
    ],
    sections: [
      {
        icon: '🌡️',
        title: 'Why Nitrogen Over Air?',
        body: `Standard compressed air contains roughly 78% nitrogen already, plus 21% oxygen and traces of water vapour. The water vapour is the problem — it expands when tyres heat up during driving, causing pressure to fluctuate and contributing to internal tyre corrosion on alloy and steel rims.

Pure nitrogen (N₂) eliminates the moisture entirely. Because nitrogen molecules are larger than oxygen molecules, they also migrate through the tyre rubber more slowly — meaning your pressure stays consistent for 3–4× longer than with regular air. This means:

- More stable handling and braking performance
- Reduced tyre wear from consistent contact patch
- Better fuel economy (under-inflation increases rolling resistance)
- Cooler running temperatures, especially under high-speed or load conditions`,
      },
      {
        icon: '🏎️',
        title: 'Who Benefits Most?',
        body: `While all vehicles benefit from nitrogen inflation, the advantages are especially noticeable for:

- **Highway drivers** — pressure stays stable at speed, improving safety and efficiency
- **Heavy vehicles and SUVs** — carrying heavier loads means pressure matters more
- **Performance and sports cars** — consistent pressure is critical for handling
- **Vehicles in hot climates** — Lagos heat accelerates pressure fluctuation in air-filled tyres

Switching to nitrogen is quick and affordable. We purge your existing air and refill with pure nitrogen — a process that takes just a few minutes per tyre.`,
      },
    ],
    faqs: [
      { q: 'Can I mix nitrogen and regular air?', a: 'You can, but it dilutes the nitrogen and reduces the benefits. We recommend topping up with nitrogen only, or refilling fully if you need an emergency top-up with air elsewhere.' },
      { q: 'How often do I need to top up nitrogen?', a: 'Nitrogen retains pressure much longer than air — typically 4–6 weeks between checks rather than 2 weeks for regular air. We recommend a pressure check every month.' },
      { q: 'Is nitrogen inflation safe?', a: 'Absolutely. Nitrogen is inert, non-flammable, and non-corrosive. It\'s used in aircraft, motorsport, and Formula 1 for its stability and safety properties.' },
      { q: 'Does nitrogen work with all tyre types?', a: 'Yes — nitrogen can be used in any tyre, including run-flat tyres, tubed tyres, and all sizes from compact cars to large SUVs and commercial vehicles.' },
    ],
  },
];

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
