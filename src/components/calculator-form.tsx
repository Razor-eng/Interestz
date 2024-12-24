"use client"
import { useState } from 'react'
import { Bank } from '@/types/bank'
import { calculateFD, calculateRD } from '@/lib/calculations'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { InfoIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface CalculatorFormProps {
  banks: Bank[]
}

export function CalculatorForm({ banks }: CalculatorFormProps) {
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null)
  const [amount, setAmount] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [calculationType, setCalculationType] = useState('fd')
  const [selectedTenure, setSelectedTenure] = useState('') // Track selected tenure

  const handleCalculate = () => {
    if (!selectedBank || !amount || !selectedTenure) return

    const principal = parseFloat(amount)
    const years = parseFloat(selectedTenure)

    let maturityAmount = 0
    const selectedRate =
      calculationType === 'fd'
        ? selectedBank.rates.fd[selectedTenure] // Fetch FD rate for selected tenure
        : selectedBank.rates.rd[selectedTenure] // Fetch RD rate for selected tenure

    if (calculationType === 'fd') {
      maturityAmount = calculateFD(principal, selectedRate, years)
    } else {
      maturityAmount = calculateRD(principal, selectedRate, years * 12) // RD tenure is in months
    }
    setResult(maturityAmount)
  }

  return (
    <div className="w-full max-w-lg mx-auto p-6 space-y-8 rounded-xl bg-white dark:bg-black shadow-lg border border-gray-200 dark:border-gray-800">
      <Tabs defaultValue="fd" onValueChange={setCalculationType} onClick={handleCalculate}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="fd">Fixed Deposit</TabsTrigger>
          <TabsTrigger value="rd">Recurring Deposit</TabsTrigger>
        </TabsList>
        <TabsContent value="fd">
          <p className="text-sm text-muted-foreground">
            Calculate your Fixed Deposit maturity amount
          </p>
        </TabsContent>
        <TabsContent value="rd">
          <p className="text-sm text-muted-foreground">
            Calculate your Recurring Deposit maturity amount
          </p>
        </TabsContent>
      </Tabs>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bank">Select Bank</Label>
          <Select onValueChange={(value) => setSelectedBank(banks.find(b => b.id === value) || null)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a bank" />
            </SelectTrigger>
            <SelectContent>
              {banks.map((bank) => (
                <SelectItem key={bank.id} value={bank.id}>
                  <div className="flex items-center space-x-2">
                    <bank.icon className="h-4 w-4" />
                    <span>{bank.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">
            {calculationType === 'fd' ? 'Principal Amount' : 'Monthly Deposit'}
          </Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tenure">Select Tenure (Years)</Label>
          <Select onValueChange={setSelectedTenure} disabled={!selectedBank}>
            <SelectTrigger>
              <SelectValue placeholder="Select tenure" />
            </SelectTrigger>
            <SelectContent>
              {selectedBank &&
                Object.keys(calculationType === 'fd' ? selectedBank.rates.fd : selectedBank.rates.rd).map((key) => (
                  <SelectItem key={key} value={key}>
                    {key} year{key !== '1' && 's'}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {selectedBank && selectedTenure && (
          <div className="text-sm">
            Interest Rate: {calculationType === 'fd' ? selectedBank.rates.fd[selectedTenure] : selectedBank.rates.rd[selectedTenure]}%
          </div>
        )}

        <Button
          size={'lg'}
          variant={'ghost'}
          disabled={!selectedBank || !selectedTenure || !amount}
          onClick={handleCalculate}
          className="w-full px-4 py-2 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:cursor-none"
        >
          Calculate Maturity
        </Button>

        {result && selectedBank && (
          <div className="p-6 mt-6 rounded-md flex justify-between items-center border bg-zinc-100 dark:bg-zinc-900">
            <div className="flex flex-col">
              <p className="font-semibold text-lg">Maturity Amount:</p>
              <p className="text-3xl text-[#11884D] font-semibold">{`₹${result.toFixed(2)}`}</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={'secondary'} size={"icon"}>
                  <InfoIcon />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Calculation Breakdown</DialogTitle>
                  <DialogDescription>
                    Here is the detailed breakdown of your maturity amount.
                  </DialogDescription>
                </DialogHeader>
                <Separator />
                <div className="space-y-2">
                  <div className="w-full flex items-center justify-center gap-2 mb-6">
                    <selectedBank.icon />
                    <span>{selectedBank?.name}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <p><strong>Principal Amount:</strong> <span className='text-[#11884D]'>₹{amount}</span></p>
                    <p><strong>Maturity Amount:</strong> <span className='text-[#11884D]'>₹{result.toFixed(2)}</span></p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p><strong>Interest Rate:</strong> <span className='text-muted-foreground'>{calculationType === 'fd' ? selectedBank?.rates.fd[selectedTenure] : selectedBank?.rates.rd[selectedTenure]}%</span></p>
                    <p><strong>Tenure:</strong> <span className='text-muted-foreground'>{selectedTenure} year{selectedTenure !== '1' && 's'}</span></p>
                  </div>
                  <p><strong>Total Interest:</strong> <span className='text-[#11884D]'>₹{calculationType === 'fd' ? (result - parseFloat(amount)).toFixed(2) : (result - parseFloat(amount) * parseInt(selectedTenure[0]) * 12).toFixed(2)}</span></p>
                </div>
                <DialogFooter>
                  <Button
                    className="w-full"
                    variant={'destructive'}
                    onClick={() => setResult(null)}
                  >
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  )
}
