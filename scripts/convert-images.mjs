import sharp from "sharp"
import { readFileSync, writeFileSync } from "fs"
import { join } from "path"

const PUBLIC = "public"

// Selected images: [source filename, output SEO name, quality, resize width]
const IMAGES = [
  // Hero — real Coaster bus front view, clean white, best vehicle shot
  ["469165969_122130557672501142_7681949898008039333_n.jpg",
   "car-lift-sharjah-to-dubai-m1-coaster-bus.webp", 82, 1200],

  // Real bus photo at petrol station — most authentic vehicle shot
  ["500038776_122165620208501142_2313595991699867297_n.jpg",
   "m1-carlift-fuso-rosa-bus-real-photo.webp", 80, 1200],

  // Route info poster — pickup/dropoff details (best for sharjah-to-dubai page)
  ["483927109_122150119190501142_963461960310467247_n.jpg",
   "car-lift-sharjah-dubai-pickup-dropoff-routes.webp", 78, 900],

  // Carlift service with multiple vehicle collage
  ["484092397_122151359912501142_6784244262578280597_n.jpg",
   "m1-carlift-service-sharjah-dubai-vehicles.webp", 78, 900],

  // Affordable CarLift service poster (blue coach)
  ["473828069_122140006448501142_6403506588699675868_n.jpg",
   "m1-smartline-affordable-carlift-service-dubai.webp", 78, 900],

  // Car Lift Sharjah To — multiple destinations + vehicles
  ["503224682_122167015880501142_2840702143446208006_n.jpg",
   "car-lift-sharjah-to-dubai-jlt-business-bay-routes.webp", 78, 900],

  // Owner photo — Taimoor Mughal, carlift owner
  ["702404400_122222691926501142_49194213082912912_n.jpg",
   "m1-carlift-owner-taimoor-mughal-sharjah-dubai.webp", 82, 800],

  // Bus Charter bilingual poster — Arabic + English, large bus hero
  ["741112977_122229613160501142_2939083365156693046_n.jpg",
   "sharjah-to-dubai-bus-charter-car-lift-schedule.webp", 80, 900],

  // Bus boarding photo — person stepping onto bus
  ["746130293_122230421954501142_2920516855120766923_n.jpg",
   "car-lift-pick-and-drop-service-sharjah-dubai-boarding.webp", 80, 900],

  // M1 logo badge on celebration background
  ["724153466_122226335102501142_7451989843324204944_n.jpg",
   "m1-smartline-carlift-brand-logo-uae.webp", 82, 600],
]

let totalBefore = 0
let totalAfter = 0

for (const [src, dest, quality, width] of IMAGES) {
  const srcPath = join(PUBLIC, src)
  const destPath = join(PUBLIC, "images", dest)

  const srcSize = readFileSync(srcPath).length
  totalBefore += srcSize

  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(destPath)

  const destSize = readFileSync(destPath).length
  totalAfter += destSize

  const saving = (((srcSize - destSize) / srcSize) * 100).toFixed(0)
  console.log(`✓ ${dest}`)
  console.log(`  ${(srcSize/1024).toFixed(0)}KB → ${(destSize/1024).toFixed(0)}KB  (${saving}% smaller)`)
}

console.log(`\nTotal: ${(totalBefore/1024).toFixed(0)}KB → ${(totalAfter/1024).toFixed(0)}KB`)
console.log(`Saved ${((totalBefore-totalAfter)/1024).toFixed(0)}KB (${(((totalBefore-totalAfter)/totalBefore)*100).toFixed(0)}%)`)
