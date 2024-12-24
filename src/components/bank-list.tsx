import { Bank } from '@/types/bank'
import { BankCard } from './bank-card'

interface BankListProps {
  banks?: Bank[]
}

export function BankList({ banks = [] }: BankListProps) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {banks.map((bank) => (
        <BankCard key={bank.id} bank={bank} />
      ))}
    </div>
  )
}

