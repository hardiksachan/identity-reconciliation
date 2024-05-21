import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>) {
  await db.schema
    .createTable("contact")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("phoneNumber", "varchar")
    .addColumn("email", "varchar")
    .addColumn("linkedId", "integer", (col) => col.references("contact.id"))
    .addColumn("createdAt", "date", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .addColumn("updatedAt", "date", (col) =>
      col.notNull().defaultTo(sql`now()`),
    )
    .execute();
}

export async function down(db: Kysely<any>) {
  await db.schema.dropTable("contact").execute();
}
