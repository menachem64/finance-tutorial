
import { insertTransactionSchema } from "@/db/schema";
import { z } from "zod";
import { Mutation } from "@tanstack/react-query";
import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";
import { useCreateTransaction } from "../api/use-create-transaction";

const formSchema = insertTransactionSchema.omit({
  id: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewTransactionSheet = () => {
    const { isOpen, onClose } = useNewTransaction();

    const mutation = useCreateTransaction();

    const onSubmit = (values: FormValues) => {
      mutation.mutate(values, {
        onSuccess: () => {
          onClose();
        },
      })
    }
    
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
           <SheetContent className="space-y-4">
             <SheetHeader>
               <SheetTitle>
                 New Transaction
               </SheetTitle>
                  <SheetDescription>
                     add a new transactions
                  </SheetDescription>
              </SheetHeader>
               <p>TODO Transaction Form</p>
           </SheetContent>
        </Sheet>
    )
}