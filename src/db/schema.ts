import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 60 }),
  service: varchar("service", { length: 120 }).notNull(),
  guests: varchar("guests", { length: 40 }),
  dates: varchar("dates", { length: 120 }),
  budget: varchar("budget", { length: 80 }),
  message: text("message"),
  source: varchar("source", { length: 80 }).default("landing"),
  utmSource: varchar("utm_source", { length: 120 }),
  utmMedium: varchar("utm_medium", { length: 120 }),
  utmCampaign: varchar("utm_campaign", { length: 160 }),
  language: varchar("language", { length: 10 }).default("es"),
  contacted: boolean("contacted").default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
