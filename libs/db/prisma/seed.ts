import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { LegalDocumentType, PrismaClient } from '../src/generated/client';

const databaseUrl =
  process.env.DATABASE_URL ??
  `postgresql://${process.env.POSTGRES_USER ?? 'admin'}:${process.env.POSTGRES_PASSWORD ?? 'strong_password_here'}@${process.env.POSTGRES_HOST ?? '127.0.0.1'}:${process.env.POSTGRES_PORT ?? '5101'}/${process.env.POSTGRES_DB ?? 'zeroquest'}`;

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const clientType = await prisma.clientType.upsert({
    where: { name: 'web' },
    update: {},
    create: { name: 'web' },
  });

  const inbound = await prisma.inbound.upsert({
    where: { inboundId: 6 },
    update: {
      enable: true,
      name: 'Seed Inbound #6',
    },
    create: {
      inboundId: 6,
      enable: true,
      name: 'Seed Inbound #6',
    },
  });

  const plans = [
    {
      name: 'test-plan-s',
      price: 199,
      totalGb: 30,
      duratationDays: 30,
      description: 'Тестовый план S',
    },
    {
      name: 'test-plan-m',
      price: 399,
      totalGb: 100,
      duratationDays: 30,
      description: 'Тестовый план M',
    },
    {
      name: 'test-plan-l',
      price: 799,
      totalGb: 300,
      duratationDays: 30,
      description: 'Тестовый план L',
    },
  ];

  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { name: plan.name },
      update: {
        price: plan.price,
        totalGb: plan.totalGb,
        duratationDays: plan.duratationDays,
        description: plan.description,
        inboundId: inbound.id,
      },
      create: {
        name: plan.name,
        price: plan.price,
        totalGb: plan.totalGb,
        duratationDays: plan.duratationDays,
        description: plan.description,
        inboundId: inbound.id,
      },
    });
  }

  const legalDocuments: Array<{
    type: LegalDocumentType;
    content: string;
  }> = [
    {
      type: LegalDocumentType.PRIVACY,
      content: 'Seed privacy policy',
    },
    {
      type: LegalDocumentType.PUBLIC,
      content: 'Seed public offer policy',
    },
    {
      type: LegalDocumentType.TERMS,
      content: 'Seed terms of service',
    },
  ];

  for (const doc of legalDocuments) {
    const exists = await prisma.legalDocument.findFirst({
      where: { type: doc.type },
      select: { id: true },
    });

    if (!exists)
      await prisma.legalDocument.create({
        data: {
          type: doc.type,
          content: doc.content,
        },
      });
  }

  console.log(
    `Seed done: clientType=${clientType.name}, inboundId=${inbound.inboundId}, plans=${plans.length}, legalDocuments=${legalDocuments.length}`,
  );
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
