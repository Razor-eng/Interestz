"use client"

import { Bank } from '@/types/bank';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface BankCardProps {
  bank: Bank;
}

export function BankCard({ bank }: BankCardProps) {
  const Icon = bank.icon;
  const [isOpen, setIsOpen] = useState(false);

  const tenures = ['1', '2', '3', '5'] as const;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="p-6 rounded-lg bg-card flex flex-col gap-4 border transition-all duration-200 hover:shadow-lg cursor-pointer min-h-36">
            <div className="flex items-center space-x-4">
              <Icon className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-semibold">{bank.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{bank.description}</p>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Icon className="w-6 h-6 text-primary" />
              <span>{bank.name}</span>
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Interest Rates</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tenure</TableHead>
                  <TableHead>FD Rate</TableHead>
                  <TableHead>RD Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tenures.map((tenure) => (
                  <TableRow key={tenure}>
                    <TableCell>{tenure} Year{tenure !== '1' ? 's' : ''}</TableCell>
                    <TableCell>{bank.rates.fd[tenure]}%</TableCell>
                    <TableCell>{bank.rates.rd[tenure]}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">{bank.description}</p>
        </DialogContent>
      </Dialog>
    </>
  );
}

