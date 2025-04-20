
import { Progress } from "@/components/ui/progress";
import { Leaf } from "lucide-react";

interface CarbonImpactMeterProps {
  carbonFootprint: number;
  comparison?: {
    label: string;
    value: number;
  };
  size?: "sm" | "md" | "lg";
}

const CarbonImpactMeter = ({ 
  carbonFootprint, 
  comparison,
  size = "md" 
}: CarbonImpactMeterProps) => {
  // Calculate a score from 0-100 based on the footprint
  // Lower footprint = higher score (better for environment)
  const MAX_FOOTPRINT = comparison?.value || 10; // Adjust based on your scale
  const score = Math.max(0, Math.min(100, (1 - (carbonFootprint / MAX_FOOTPRINT)) * 100));
  
  // Determine color based on score
  let color = "bg-eco-green";
  if (score < 33) {
    color = "bg-red-500";
  } else if (score < 66) {
    color = "bg-yellow-500";
  }

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  return (
    <div className={`space-y-2 ${sizeClasses[size]}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Leaf className={`h-4 w-4 mr-1 ${score > 50 ? 'text-eco-green' : 'text-gray-400'}`} />
          <span className="font-medium">Carbon Footprint</span>
        </div>
        <span className="font-semibold">{carbonFootprint} kg CO₂e</span>
      </div>
      
      <Progress value={score} className="h-2" indicatorClassName={color} />
      
      {comparison && (
        <div className="flex justify-between text-muted-foreground text-xs">
          <span>Better than average</span>
          <span>
            {Math.round(100 - (carbonFootprint / comparison.value) * 100)}% less than avg. {comparison.label}
          </span>
        </div>
      )}
    </div>
  );
};

export default CarbonImpactMeter;
