import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Tooltipx = ({children}:{children:React.ReactNode}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>Click to view the code</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Tooltipx;
