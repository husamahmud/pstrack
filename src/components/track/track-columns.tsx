'use client'

import { ColumnDef } from '@tanstack/react-table'

import { LeetcoderRow } from '@/types/supabase.type'
import { TrackTableType } from '@/types/trackTable.type'
import { SubmitDailyProblem } from '@/types/submitDailyProblem.type'

import { Checkbox } from '@/components/luxe/checkbox'

// Function to generate user columns with conditional disabling
export const getUserColumns = (
  currentUserId: string | undefined,
  leetcoders: LeetcoderRow[],
  submitDailyProblem: ({
    user_id,
    problem_id,
    group_no,
  }: SubmitDailyProblem) => Promise<boolean>,
  groupId: number
) => {
  return leetcoders.map((user) => ({
    id: user.id,
    header: () => <div className="">@{user.username}</div>, // todo: replace with hover card
    cell: ({ row }: { row: { original: TrackTableType } }) => {
      const userSubmission = row.original.userSubmissions.find(
        (sub: { user_id: string; solved: boolean }) => sub.user_id === user.id
      )

      const handleSubmit = async () => {
        const result = await submitDailyProblem({
          user_id: user.id,
          problem_id: row.original.problem.id,
          group_no: groupId,
        })
        if (!result) {
          throw new Error('Failed to submit daily problem')
        }
      }

      return (
        <Checkbox
          checked={userSubmission?.solved || false}
          disabled={
            (currentUserId && user.id !== currentUserId) || // Disable if not the current user
            userSubmission?.solved // Disable if already solved
          }
          onChange={handleSubmit}
        />
      )
    },
  }))
}

// Define the columns for the table
export const getColumns = (
  currentUserId: string | undefined,
  leetcoders: LeetcoderRow[],
  submitDailyProblem: ({ user_id, problem_id }: SubmitDailyProblem) => Promise<boolean>,
  groupId: number
): ColumnDef<TrackTableType>[] => [
  {
    accessorKey: 'problemOrder',
    header: 'Problem No',
    sortingFn: 'alphanumeric',
    enableSorting: true,
  },
  {
    accessorKey: 'groupProgressDate',
    header: 'Date',
  },
  {
    accessorKey: 'problem.topic',
    header: 'Topic',
  },
  {
    accessorKey: 'problem.difficulty',
    header: 'Difficulty',
  },
  {
    accessorKey: 'totalSolved',
    header: 'Count',
  },
  {
    id: 'userSubmissions',
    header: '',
    columns: getUserColumns(currentUserId, leetcoders, submitDailyProblem, groupId),
  },
]
