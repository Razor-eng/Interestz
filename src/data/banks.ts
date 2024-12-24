import { Bank } from '@/types/bank';
import SbiIcon from './icons/SbiIcon';
import HdfcIcon from './icons/HdfcIcon';
import IciciIcon from './icons/IciciIcon';
import AxisIcon from './icons/AxisIcon';
import KotakIcon from './icons/KotakIcon';
import BarodaIcon from './icons/BarodaIcon';
import PnbIcon from './icons/PnbIcon';
import IobIcon from './icons/IobIcon';

export const banks: Bank[] = [
  {
    id: 'sbi',
    name: 'State Bank of India',
    icon: SbiIcon,
    rates: {
      fd: {
        '1': 6.50,
        '2': 6.75,
        '3': 7.00,
        '5': 7.25
      },
      rd: {
        '1': 6.00,
        '2': 6.25,
        '3': 6.50,
        '5': 6.75
      }
    },
    description: 'India\'s largest public sector bank offering competitive interest rates'
  },
  {
    id: 'icici',
    name: 'ICICI Bank',
    icon: IciciIcon,
    rates: {
      fd: {
        '1': 7.00,
        '2': 7.25,
        '3': 7.50,
        '5': 7.75
      },
      rd: {
        '1': 6.50,
        '2': 6.75,
        '3': 7.00,
        '5': 7.25
      }
    },
    description: 'Leading private sector bank with innovative banking solutions'
  },
  {
    id: 'hdfc',
    name: 'HDFC Bank',
    icon: HdfcIcon,
    rates: {
      fd: {
        '1': 6.75,
        '2': 7.00,
        '3': 7.25,
        '5': 7.50
      },
      rd: {
        '1': 6.25,
        '2': 6.50,
        '3': 6.75,
        '5': 7.00
      }
    },
    description: 'One of India\'s premier banks known for excellent service'
  },
  {
    id: 'axis',
    name: 'Axis Bank',
    icon: AxisIcon,
    rates: {
      fd: {
        '1': 6.85,
        '2': 7.00,
        '3': 7.25,
        '5': 7.50
      },
      rd: {
        '1': 6.40,
        '2': 6.60,
        '3': 6.75,
        '5': 7.00
      }
    },
    description: 'Modern banking solutions with competitive interest rates'
  },
  {
    id: 'kotak',
    name: 'Kotak Mahindra Bank',
    icon: KotakIcon,
    rates: {
      fd: {
        '1': 6.75,
        '2': 7.00,
        '3': 7.25,
        '5': 7.50
      },
      rd: {
        '1': 6.25,
        '2': 6.50,
        '3': 6.75,
        '5': 7.00
      }
    },
    description: 'Customer-focused bank offering innovative products and services'
  },
  {
    id: 'baroda',
    name: 'Bank of Baroda',
    icon: BarodaIcon,
    rates: {
      fd: {
        '1': 6.50,
        '2': 6.75,
        '3': 7.00,
        '5': 7.25
      },
      rd: {
        '1': 6.00,
        '2': 6.25,
        '3': 6.50,
        '5': 6.75
      }
    },
    description: 'A public sector bank with a wide range of banking services'
  },
  {
    id: 'pnb',
    name: 'Punjab National Bank',
    icon: PnbIcon,
    rates: {
      fd: {
        '1': 6.25,
        '2': 6.50,
        '3': 6.75,
        '5': 7.00
      },
      rd: {
        '1': 5.75,
        '2': 6.00,
        '3': 6.25,
        '5': 6.50
      }
    },
    description: 'A major public sector bank with a rich heritage and extensive network'
  },
  {
    id: 'iob',
    name: 'Indian Overseas Bank',
    icon: IobIcon,
    rates: {
      fd: {
        '1': 6.25,
        '2': 6.50,
        '3': 6.75,
        '5': 7.00
      },
      rd: {
        '1': 5.75,
        '2': 6.00,
        '3': 6.25,
        '5': 6.50
      }
    },
    description: 'A prominent public sector bank offering a wide range of financial services'
  }
];
