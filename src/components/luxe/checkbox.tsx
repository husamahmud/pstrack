'use client'

import { motion } from 'framer-motion'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

interface CheckboxProps {
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export function Checkbox({ checked, disabled, onChange }: CheckboxProps) {
  return (
    <RadixCheckbox.Root
      className={`flex h-5 w-5 flex-shrink-0 appearance-none items-center justify-center rounded border border-neutral-800 bg-neutral-900 outline-none ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      }`}
      checked={checked}
      disabled={disabled}
      onCheckedChange={onChange}
    >
      <RadixCheckbox.Indicator>
        <motion.div
          className="h-[inherit] w-[inherit] rounded bg-white"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <CheckIcon />
        </motion.div>
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M5 7.5L7 9.5L7.40859 8.81902C8.13346 7.6109 9.00376 6.49624 10 5.5V5.5"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          opacity: 0,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        exit={{
          opacity: 0,
          pathLength: 0,
        }}
        transition={{
          delay: 0.025,
          duration: 0.35,
        }}
      />
    </svg>
  )
}
