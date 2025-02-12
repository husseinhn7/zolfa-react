import { useToast } from "@/hooks/use-toast";
import useLoading from "./loading"

const useApiToast = () => {
  const { toast } = useToast();
  const [setLoading] = useLoading()
  const handleApiResponse = (action, result) => {
    if (result.error) {
      toast({
        title: "Error",
        description: result.error.data?.message || "Something went wrong",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `${action}`,
      });
    }
    setLoading(false)
  };

  return { handleApiResponse };
};

export default useApiToast;
