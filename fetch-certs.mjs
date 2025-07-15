import fs from "fs/promises";
import 'dotenv/config';

const token = process.env.CREDLY_TOKEN;
const user = process.env.CREDLY_USER_ID;

const res = await fetch(
  `https://api.credly.com/v1/users/${user}/badges`,
  { headers: { Authorization: `Bearer ${token}` } },
);

const json = await res.json();

const certs = json.data.map((c) => ({
  provider: c.badge_template.badge_template_issuer.name,
  name: c.badge_template.name,
  badge: c.badge_template.image_url,
  issued: c.issued_at,
  verify: c.badge_template.url,
}));

await fs.writeFile(
  "src/data/certs.js",
  `export const certs = ${JSON.stringify(certs, null, 2)};`,
);
