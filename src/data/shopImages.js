// Optimized (WebP, multi-width) photos of the real Johnfield Services workshop.
// Generated from src/images/shop via scripts/optimize-shop-images.js
import heroWorkshop800 from '../images/shop-optimized/hero-workshop-800.webp';
import heroWorkshop1600 from '../images/shop-optimized/hero-workshop-1600.webp';
import aboutWorkshop800 from '../images/shop-optimized/about-workshop-800.webp';
import aboutWorkshop1600 from '../images/shop-optimized/about-workshop-1600.webp';

import galleryAlignment1_800 from '../images/shop-optimized/gallery-alignment-1-800.webp';
import galleryAlignment1_1600 from '../images/shop-optimized/gallery-alignment-1-1600.webp';
import galleryAlignment2_800 from '../images/shop-optimized/gallery-alignment-2-800.webp';
import galleryAlignment2_1600 from '../images/shop-optimized/gallery-alignment-2-1600.webp';
import galleryAlignment3_800 from '../images/shop-optimized/gallery-alignment-3-800.webp';
import galleryAlignment3_1600 from '../images/shop-optimized/gallery-alignment-3-1600.webp';
import galleryAlignment4_800 from '../images/shop-optimized/gallery-alignment-4-800.webp';
import galleryAlignment4_1600 from '../images/shop-optimized/gallery-alignment-4-1600.webp';

import galleryPaintbooth1_800 from '../images/shop-optimized/gallery-paintbooth-1-800.webp';
import galleryPaintbooth1_1600 from '../images/shop-optimized/gallery-paintbooth-1-1600.webp';
import galleryPaintbooth2_800 from '../images/shop-optimized/gallery-paintbooth-2-800.webp';
import galleryPaintbooth2_1600 from '../images/shop-optimized/gallery-paintbooth-2-1600.webp';

import serviceAlignment1_800 from '../images/shop-optimized/service-alignment-1-800.webp';
import serviceAlignment1_1600 from '../images/shop-optimized/service-alignment-1-1600.webp';
import serviceAlignment2_800 from '../images/shop-optimized/service-alignment-2-800.webp';
import serviceAlignment2_1600 from '../images/shop-optimized/service-alignment-2-1600.webp';
import serviceAlignment3_800 from '../images/shop-optimized/service-alignment-3-800.webp';
import serviceAlignment3_1600 from '../images/shop-optimized/service-alignment-3-1600.webp';
import serviceAlignment4_800 from '../images/shop-optimized/service-alignment-4-800.webp';
import serviceAlignment4_1600 from '../images/shop-optimized/service-alignment-4-1600.webp';

const pair = (src800, src1600) => ({
  image: src1600,
  srcSet: `${src800} 800w, ${src1600} 1600w`,
});

export const HERO_WORKSHOP_IMAGE = pair(heroWorkshop800, heroWorkshop1600);
export const ABOUT_WORKSHOP_IMAGE = pair(aboutWorkshop800, aboutWorkshop1600);

export const WORKSHOP_PHOTOS = [
  { ...pair(galleryAlignment1_800, galleryAlignment1_1600), caption: 'Digital Wheel Alignment Bay' },
  { ...pair(galleryAlignment3_800, galleryAlignment3_1600), caption: 'Precision Alignment Equipment' },
  { ...pair(galleryPaintbooth1_800, galleryPaintbooth1_1600), caption: 'Spray Painting & Baking Booth' },
  { ...pair(galleryPaintbooth2_800, galleryPaintbooth2_1600), caption: 'Factory-Finish Paint Booth' },
  { ...pair(galleryAlignment4_800, galleryAlignment4_1600), caption: 'Full-Service Workshop Bay' },
  { ...pair(galleryAlignment2_800, galleryAlignment2_1600), caption: 'Vehicles In For Service' },
];

export const ALIGNMENT_SERVICE_PHOTOS = [
  { ...pair(serviceAlignment1_800, serviceAlignment1_1600), caption: 'Digital Alignment in Progress' },
  { ...pair(serviceAlignment2_800, serviceAlignment2_1600), caption: 'Precision Wheel Sensors' },
  { ...pair(serviceAlignment3_800, serviceAlignment3_1600), caption: 'Alignment Bay Setup' },
  { ...pair(serviceAlignment4_800, serviceAlignment4_1600), caption: 'Ready for the Road' },
];

export const WHEEL_BALANCING_PHOTOS = [
  { ...pair(galleryAlignment3_800, galleryAlignment3_1600), caption: 'Computerised Balancing Equipment' },
  { ...pair(serviceAlignment3_800, serviceAlignment3_1600), caption: 'Balancing Bay Setup' },
];

export const BODY_SHOP_PHOTOS = [
  { ...pair(galleryPaintbooth1_800, galleryPaintbooth1_1600), caption: 'Spray Painting in the Booth' },
  { ...pair(galleryPaintbooth2_800, galleryPaintbooth2_1600), caption: 'Factory-Finish Baking Booth' },
];
