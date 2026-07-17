import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const root = "public/images";
const maxWidth = 1600;

function walk(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walk(p));
    else if (/\.(png|jpe?g)$/i.test(entry.name)) out.push(p);
  }
  return out;
}

const files = walk(root).filter((f) => fs.statSync(f).size > 300 * 1024);

let totalBefore = 0;
let totalAfter = 0;
const results = [];

for (const file of files) {
  const before = fs.statSync(file).size;
  const buf = fs.readFileSync(file);
  const meta = await sharp(buf).metadata();

  let pipeline = sharp(buf);
  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  const ext = path.extname(file).toLowerCase();
  let outBuf;
  if (ext === ".png") {
    outBuf = await pipeline.png({ compressionLevel: 9, palette: true, quality: 85 }).toBuffer();
    if (outBuf.length > before) {
      outBuf = await sharp(buf)
        .resize(meta.width && meta.width > maxWidth ? { width: maxWidth, withoutEnlargement: true } : undefined)
        .png({ compressionLevel: 9 })
        .toBuffer();
    }
  } else {
    outBuf = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  }

  if (outBuf.length < before) {
    fs.writeFileSync(file, outBuf);
    totalBefore += before;
    totalAfter += outBuf.length;
    results.push({ file, before, after: outBuf.length });
  } else {
    results.push({ file, before, after: before, skipped: true });
  }
}

results.sort((a, b) => b.before - a.before);
for (const r of results) {
  const savedPct = (((r.before - r.after) / r.before) * 100).toFixed(0);
  console.log(
    `${r.skipped ? "SKIP" : "OK  "} ${r.file}  ${(r.before / 1024 / 1024).toFixed(2)}MB -> ${(r.after / 1024 / 1024).toFixed(2)}MB (${savedPct}%)`
  );
}
console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`);
