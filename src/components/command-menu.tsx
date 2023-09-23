'use client'

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandYoutube,
  IconCode,
  IconCommand,
  IconLink
} from '@tabler/icons-react'
import React from 'react'
import toast from 'react-hot-toast'

import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui'

/**
 * An array of groups, where each group has a name and an array of actions.
 */
type Groups = Array<{
  /**
   * The name of the group.
   */
  name: string
  /**
   * An array of actions.
   */
  actions: Array<{
    /**
     * The title of the action.
     */
    title: string
    /**
     * The icon of the action.
     */
    icon: React.ReactNode
    /**
     * The callback to run when the action is selected.
     */
    onSelect: () => void
  }>
}>

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((value) => !value)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  const groups: Groups = [
    {
      name: 'General',
      actions: [
        {
          title: 'Copy Link',
          icon: <IconLink size={16} className='mr-2' />,
          onSelect: () =>
            runCommand(async () => {
              if (!navigator?.clipboard) {
                return toast.error('Access to clipboard rejected!')
              }

              try {
                await navigator.clipboard.writeText(window.location.href)
                return toast.success(
                  <div className='flex flex-col'>
                    <div>Copied</div>
                    <div className='text-sm text-muted-foreground'>
                      You can now share it with anyone.
                    </div>
                  </div>
                )
              } catch {
                return toast.error('Failed to copy!')
              }
            })
        },
        {
          title: 'Source code',
          icon: <IconCode size={16} className='mr-2' />,
          onSelect: () =>
            runCommand(() =>
              window.open(
                'https://github.com/tszhong0411/honghong.me',
                '_blank'
              )
            )
        }
      ]
    },
    {
      name: 'Social',
      actions: [
        {
          title: 'GitHub',
          icon: <IconBrandGithub size={16} className='mr-2' />,
          onSelect: () =>
            runCommand(() =>
              window.open('https://github.com/tszhong0411', '_blank')
            )
        },
        {
          title: 'Instagram',
          icon: <IconBrandInstagram size={16} className='mr-2' />,
          onSelect: () =>
            runCommand(() =>
              window.open('https://instagram.com/tszhong0411/', '_blank')
            )
        },
        {
          title: 'YouTube',
          icon: <IconBrandYoutube size={16} className='mr-2' />,
          onSelect: () =>
            runCommand(() =>
              window.open('https://youtube.com/@tszhong0411', '_blank')
            )
        },
        {
          title: 'Facebook',
          icon: <IconBrandFacebook size={16} className='mr-2' />,
          onSelect: () =>
            runCommand(() =>
              window.open('https://www.facebook.com/tszhong0411/', '_blank')
            )
        }
      ]
    }
  ]

  return (
    <>
      <Button
        variant='ghost'
        className='flex h-9 w-9 items-center justify-center p-0'
        onClick={() => setOpen(true)}
        type='button'
        aria-label='Open Command Menu'
        title='Open Command Menu'
      >
        <IconCommand size={20} />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((group, i) => (
            <React.Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.actions.map((action) => (
                  <CommandItem key={action.title} onSelect={action.onSelect}>
                    {action.icon}
                    {action.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              {i !== groups.length - 1 && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default CommandMenu
