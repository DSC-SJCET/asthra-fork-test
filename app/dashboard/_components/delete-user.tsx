"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Trash2Icon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";

type Props = {
  id: string;
};

export const DeleteUser = ({ id }: Props) => {
  const [deletUser, setDeleteUser] = useState(false);

  //impliment delete logic here..

  return (
    <>
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => setDeleteUser(true)}
      >
        <Trash2Icon className="h-3 w-3 text-destructive" />
      </Button>
      <AlertDialog open={deletUser} onOpenChange={setDeleteUser}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
