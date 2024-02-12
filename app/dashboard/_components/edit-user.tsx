'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { allRoles } from '~/logic/roles';
import { Edit } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '~/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

type Props = {
  selected: string;
};

const UserSchema = z.object({
  role: z.string({
    required_error: 'Please select a role.',
  }),
});

export function EditUser({ selected }: Props) {
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      role: selected,
    },
  });

  function onSubmit(data: z.infer<typeof UserSchema>) {
    //impliment update logic here...
    toast.success('Hello ' + data.role);
  }

  const [editUser, setEditUser] = useState(false);

  return (
    <>
      <Button variant={'secondary'} size={'icon'} onClick={() => setEditUser(true)}>
        <Edit className="h-3 w-3 text-primary" />
      </Button>

      <Dialog open={editUser} onOpenChange={setEditUser}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Role</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Assign a role, default to user.." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.keys(allRoles)
                          .map((role) => ({
                            value: role,
                            label: role,
                          }))
                          .map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              <span className="lowercase">{option.label}</span>
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>You can manage roles assigned to each users..</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button type="submit">Update</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
