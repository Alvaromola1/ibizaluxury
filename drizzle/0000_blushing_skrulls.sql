CREATE TABLE "leads" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(160) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(60),
	"service" varchar(120) NOT NULL,
	"guests" varchar(40),
	"dates" varchar(120),
	"budget" varchar(80),
	"message" text,
	"source" varchar(80) DEFAULT 'landing',
	"utm_source" varchar(120),
	"utm_medium" varchar(120),
	"utm_campaign" varchar(160),
	"language" varchar(10) DEFAULT 'es',
	"contacted" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT now()
);
