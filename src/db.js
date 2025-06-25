import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

if (process.env.NODE_ENV === "production") {
    const source = path.resolve("prisma/dev.db");
    const destination = "/tmp/dev.db";

    if (fs.existsSync(source) && !fs.existsSync(destination)) {
        fs.copyFileSync(source, destination);
    }
}

const isProd = process.env.NODE_ENV === "production";
const databaseUrl = isProd ? "file:/tmp/dev.db" : process.env.DATABASE_URL;

const db = new PrismaClient({
    datasources: {
        db: {
            url: databaseUrl,
        },
    },
});

export default db;
