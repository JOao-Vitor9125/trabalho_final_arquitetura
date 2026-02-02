import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  const carros = [
    {
      placa: 'ABC-1234',
      ano: 2024,
      cor: 'Preto',
      rented: false
    },
    {
      placa: 'XYZ-5678',
      ano: 2023,
      cor: 'Prata',
      rented: false
    },
    {
      placa: 'KJH-9012',
      ano: 2022,
      cor: 'Branco',
      rented: false
    }
  ]

  for (const carro of carros) {
    const car = await prisma.cars.upsert({
      where: { placa: carro.placa },
      update: {},
      create: carro,
    })
    }
}
main()
