export interface Bank {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Assuming the icon is a React component
  rates: {
    fd: { [key: string]: number }; // FD rates for different tenures (key as tenure, value as rate)
    rd: { [key: string]: number }; // RD rates for different tenures (key as tenure, value as rate)
  };
  description: string;  // Bank's description
}
