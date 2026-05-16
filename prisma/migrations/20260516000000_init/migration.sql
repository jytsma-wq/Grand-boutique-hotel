CREATE TABLE "ContactSubmission" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT,
  "subject" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "locale" TEXT NOT NULL DEFAULT 'en',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "read" BOOLEAN NOT NULL DEFAULT false,

  CONSTRAINT "ContactSubmission_pkey" PRIMARY KEY ("id")
);
