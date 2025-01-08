'use client'

import { ZodError } from 'zod'
import { User } from '@supabase/auth-js'
import { fetcher } from '@/utils/fetcher'
import { toast } from '@/hooks/use-toast'
import { checkLeetCodeUserExists } from '@/utils/checkLeetCoderExist'

export const handleInsertLeetcoder = async (
  formData: FormData,
  user: User,
  groupId: number
): Promise<boolean> => {
  const data = {
    name: formData.get('name'),
    username: formData.get('username'),
    email: user.email,
    group_no: groupId,
    id: user.id,
    gh_username: formData.get('gh_username') || '',
    lc_username: formData.get('lc_username') as string,
    status: 'pending',
  }

  const leetCodeUserExists = await checkLeetCodeUserExists(data.lc_username)

  if (!leetCodeUserExists) {
    toast({
      title: 'LeetCode Username Not Found',
      description: 'The provided LeetCode username does not exist.',
      variant: 'destructive',
    })
    return false
  }

  try {
    // TODO: before submitting, check if the leetcode username exists using gql leetcode api
    //TODO: check user is authenticated
    await fetcher('/api/request', 'POST', data)
    toast({
      title: 'Request submitted!',
      description:
        'Your request is under review. You will be notified once it is approved.',
      variant: 'success',
    })
    return true
  } catch (error) {
    console.error('Error submitting request:', error)

    if (error instanceof ZodError) {
      toast({
        title: 'Validation Error',
        description: error.errors.map((err) => err.message).join(', '),
        variant: 'destructive',
      })
      return false
    }

    if (error instanceof Error && error.message === 'You are already registered.') {
      toast({
        title: 'Registration Error',
        description: error.message,
        variant: 'destructive',
      })

      return false
    }

    toast({
      title: 'Submission failed',
      description:
        error instanceof Error
          ? error.message
          : 'An error occurred while submitting your request.',
      variant: 'destructive',
    })
    return false
  }
}
