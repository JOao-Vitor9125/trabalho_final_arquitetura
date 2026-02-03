import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  const carros = [
    {
      car_id: "carro-1",
      placa: 'ABC-1234',
      ano: 2024,
      cor: 'Preto',
      rented: false
    },
    {
      car_id: "carro-2",
      placa: 'XYZ-5678',
      ano: 2023,
      cor: 'Prata',
      rented: false
    },
    {
      car_id: "carro-3",
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
      create: {
        car_id: carro.car_id,
        placa: carro.placa,
        ano: carro.ano,
        cor: carro.cor,
        rented: carro.rented
      }
    })
    }
}
main()
