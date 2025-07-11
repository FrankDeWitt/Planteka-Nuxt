export default defineAppConfig({
  ui: {
    chip: {
      slots: {
        root: 'relative inline-flex items-center justify-center shrink-0',
        base: 'rounded-full ring ring-dawnPink flex items-center justify-center text-inverted font-medium whitespace-nowrap'
      },
      variants: {
        color: {
          primary: 'bg-primary',
          secondary: 'bg-secondary',
          success: 'bg-success',
          info: 'bg-info',
          warning: 'bg-warning',
          error: 'bg-error',
          neutral: 'bg-inverted'
        },
      },
      defaultVariants: {
        size: 'sm',
        color: 'primary',
        position: 'bottom-right',
        inset: true,
      },
      compoundVariants: [
        {
          color: 'info',
          variant: 'solid',
          class: 'bg-avocado'
        },
      ],
    },
    badge: {
      slots: {
        base: 'font-medium inline-flex items-center',
        label: 'truncate',
        leadingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailingIcon: 'shrink-0'
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'bg-primary text-white hover:bg-primary-500 active:bg-primary-500 disabled:bg-primary aria-disabled:bg-primary'
        },
        {
          color: 'primary',
          variant: 'soft',
          class: 'bg-white text-subtle shadow-md'
        },
        {
          color: 'secondary',
          variant: 'solid',
          class: 'bg-secondary text-dawnPink hover:bg-stromboli-500 active:bg-secondary-500 disabled:bg-primary aria-disabled:bg-primary'
        },
        {
          color: 'neutral',
          variant: 'solid',
          class: 'bg-dawnPink text-inverted hover:bg-dawnPink/75 active:bg-dawnPink/90 disabled:bg-dawnPink aria-disabled:bg-dawnPink'
        },
        {
          color: 'info',
          variant: 'solid',
          class: 'bg-avocado text-dawnPnk hover:bg-dawnPink/75 active:bg-dawnPink/90 disabled:bg-dawnPink aria-disabled:bg-dawnPink'
        }
      ]
    },
    button: {
      slots: {
        base: [
          'rounded-lg font-medium text-base inline-flex items-center disabled:opacity-75 aria-disabled:opacity-75',
          'transition-colors'
        ],
        label: 'truncate',
        leadingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailingIcon: 'shrink-0'
      },
      variants: {
        buttonGroup: {
          horizontal: 'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
          vertical: 'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]'
        },
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        variant: {
          solid: '',
          outline: '',
          soft: '',
          subtle: '',
          ghost: '',
          link: ''
        },
        size: {
          xs: {
            base: 'px-2 py-1 text-xs gap-1',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          sm: {
            base: 'px-2.5 py-1.5 text-xs gap-1.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          md: {
            base: 'px-2.5 py-1.5 text-sm gap-1.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          lg: {
            base: 'px-3 py-2 text-sm gap-2',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          xl: {
            base: 'px-3 py-2 text-base gap-2',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs',
            trailingIcon: 'size-6'
          }
        },
        block: {
          true: {
            base: 'w-full justify-center',
            trailingIcon: 'ms-auto'
          }
        },
        square: {
          true: ''
        },
        leading: {
          true: ''
        },
        trailing: {
          true: ''
        },
        loading: {
          true: ''
        },
        active: {
          true: {
            base: ''
          },
          false: {
            base: ''
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'text-dawnPink bg-primary hover:bg-primary-500 active:bg-primary-500 disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
        },
        {
          color: 'secondary',
          variant: 'solid',
          class: 'text-dawnPink bg-secondary hover:bg-stromboli-500 active:bg-secondary-500 disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
        },
        {
          color: 'primary',
          variant: 'outline',
          class: 'ring ring-inset ring-primary text-primary hover:bg-primary-50 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
        },
        {
          color: 'primary',
          variant: 'soft',
          class: 'text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 focus:outline-none focus-visible:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10'
        },
        {
          color: 'primary',
          variant: 'subtle',
          class: 'text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
        },
        {
          color: 'primary',
          variant: 'ghost',
          class: 'text-primary hover:bg-primary/10 active:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
          color: 'primary',
          variant: 'link',
          class: 'text-primary underline hover:text-primary/75 active:text-primary/75 disabled:text-primary aria-disabled:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary'
        },
        {
          color: 'secondary',
          variant: 'link',
          class: 'text-secondary underline hover:text-secondary/75 active:text-secondary/75 disabled:text-primary aria-disabled:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary'
        },
        {
          color: 'neutral',
          variant: 'solid',
          class: 'text-inverted bg-dawnPink hover:bg-dawnPink/75 active:bg-dawnPink/90 disabled:bg-dawnPink aria-disabled:bg-dawnPink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dawnPink'
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: 'ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted'
        },
        {
          color: 'neutral',
          variant: 'soft',
          class: 'text-secondary bg-dawnPink hover:bg-dawnPink/75 active:bg-dawnPink/75 focus:outline-none focus-visible:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated'
        },
        {
          color: 'neutral',
          variant: 'subtle',
          class: 'text-dawnPink ring ring-inset ring-dawnPink bg-transparent hover:text-secondary hover:bg-dawnPink/75 active:bg-dawnPink/75 disabled:bg-dawnPink aria-disabled:bg-dawnPink focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted'
        },
        {
          color: 'neutral',
          variant: 'ghost',
          class: 'text-default hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent'
        },
        {
          color: 'neutral',
          variant: 'link',
          class: 'text-eaver underline hover:text-beaver focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-inverted'
        },
        {
          size: 'xs',
          square: true,
          class: 'p-1'
        },
        {
          size: 'sm',
          square: true,
          class: 'p-1.5'
        },
        {
          size: 'md',
          square: true,
          class: 'p-1.5'
        },
        {
          size: 'lg',
          square: true,
          class: 'p-2'
        },
        {
          size: 'xl',
          square: true,
          class: 'p-2'
        },
        {
          loading: true,
          leading: true,
          class: {
            leadingIcon: 'animate-spin'
          }
        },
        {
          loading: true,
          leading: false,
          trailing: true,
          class: {
            trailingIcon: 'animate-spin'
          }
        }
      ],
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
      }
    },
    input: {
      slots: {
        root: 'relative inline-flex items-center',
        base: [
          'w-full rounded-md border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors'
        ],
        leading: 'absolute inset-y-0 start-0 flex items-center',
        leadingIcon: 'shrink-0 text-dimmed',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailing: 'absolute inset-y-0 end-0 flex items-center',
        trailingIcon: 'shrink-0 text-dimmed'
      },
      variants: {
        buttonGroup: {
          horizontal: {
            root: 'group has-focus-visible:z-[1]',
            base: 'group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none'
          },
          vertical: {
            root: 'group has-focus-visible:z-[1]',
            base: 'group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none'
          }
        },
        size: {
          xs: {
            base: 'px-2 py-1 text-xs gap-1',
            leading: 'ps-2',
            trailing: 'pe-2',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          sm: {
            base: 'px-2.5 py-1.5 text-xs gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          md: {
            base: 'px-2.5 py-1.5 text-sm gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          lg: {
            base: 'px-3 py-2 text-sm gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          xl: {
            base: 'px-3 py-2 text-base gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs',
            trailingIcon: 'size-6'
          }
        },
        variant: {
          outline: 'text-highlighted bg-transparent ring ring-inset ring-accented',
          soft: 'text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50',
          subtle: 'text-highlighted bg-elevated ring ring-inset ring-accented',
          ghost: 'text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent',
          none: 'text-highlighted bg-transparent'
        },
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        leading: {
          true: ''
        },
        trailing: {
          true: ''
        },
        loading: {
          true: ''
        },
        highlight: {
          true: ''
        },
        type: {
          file: 'file:me-1.5 file:font-medium file:text-muted file:outline-none'
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary'
        },
        {
          color: 'primary',
          variant: 'soft',
          class: 'bg-white text-beaver focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-saddle focus:bg-white hover:bg-white shadow-[2px_2px_4px_0px_rgba(0,_0,_0,_0.1)]'
        },
        {
          color: 'primary',
          highlight: true,
          class: 'ring ring-inset ring-primary'
        },
        {
          color: 'neutral',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted'
        },
        {
          leading: true,
          size: 'xs',
          class: 'ps-7'
        },
        {
          leading: true,
          size: 'sm',
          class: 'ps-8'
        },
        {
          leading: true,
          size: 'md',
          class: 'ps-9'
        },
        {
          leading: true,
          size: 'lg',
          class: 'ps-10'
        },
        {
          leading: true,
          size: 'xl',
          class: 'ps-11'
        },
        {
          trailing: true,
          size: 'xs',
          class: 'pe-7'
        },
        {
          trailing: true,
          size: 'sm',
          class: 'pe-8'
        },
        {
          trailing: true,
          size: 'md',
          class: 'pe-9'
        },
        {
          trailing: true,
          size: 'lg',
          class: 'pe-10'
        },
        {
          trailing: true,
          size: 'xl',
          class: 'pe-11'
        },
        {
          loading: true,
          leading: true,
          class: {
            leadingIcon: 'animate-spin'
          }
        },
        {
          loading: true,
          leading: false,
          trailing: true,
          class: {
            trailingIcon: 'animate-spin'
          }
        }
      ],
      defaultVariants: {
        size: 'md',
        color: 'primary',
        variant: 'outline'
      }
    },
    separator: {
      slots: {
        root: 'flex items-center align-center text-center',
        border: '',
        container: 'font-medium flex',
        icon: 'shrink-0 size-5',
        avatar: 'shrink-0',
        avatarSize: '2xs',
        label: 'text-sm'
      },
      variants: {
        color: {
          primary: {
            border: 'border-primary'
          },
          secondary: {
            border: 'border-secondary'
          },
          success: {
            border: 'border-success'
          },
          info: {
            border: 'border-info'
          },
          warning: {
            border: 'border-warning'
          },
          error: {
            border: 'border-error'
          },
          neutral: {
            border: 'border-saddle'
          }
        },
        orientation: {
          horizontal: {
            root: 'w-full flex-row',
            border: 'w-full',
            container: 'mx-3 whitespace-nowrap'
          },
          vertical: {
            root: 'h-full flex-col',
            border: 'h-full',
            container: 'my-2'
          }
        },
        size: {
          xs: '',
          sm: '',
          md: '',
          lg: '',
          xl: ''
        },
        type: {
          solid: {
            border: 'border-solid'
          },
          dashed: {
            border: 'border-dashed'
          },
          dotted: {
            border: 'border-dotted'
          }
        }
      },
      compoundVariants: [
        {
          orientation: 'horizontal',
          size: 'xs',
          class: {
            border: 'border-t'
          }
        },
        {
          orientation: 'horizontal',
          size: 'sm',
          class: {
            border: 'border-t-[2px]'
          }
        },
        {
          orientation: 'horizontal',
          size: 'md',
          class: {
            border: 'border-t-[3px]'
          }
        },
        {
          orientation: 'horizontal',
          size: 'lg',
          class: {
            border: 'border-t-[4px]'
          }
        },
        {
          orientation: 'horizontal',
          size: 'xl',
          class: {
            border: 'border-t-[5px]'
          }
        },
        {
          orientation: 'vertical',
          size: 'xs',
          class: {
            border: 'border-s'
          }
        },
        {
          orientation: 'vertical',
          size: 'sm',
          class: {
            border: 'border-s-[2px]'
          }
        },
        {
          orientation: 'vertical',
          size: 'md',
          class: {
            border: 'border-s-[3px]'
          }
        },
        {
          orientation: 'vertical',
          size: 'lg',
          class: {
            border: 'border-s-[4px]'
          }
        },
        {
          orientation: 'vertical',
          size: 'xl',
          class: {
            border: 'border-s-[5px]'
          }
        }
      ],
      defaultVariants: {
        color: 'neutral',
        size: 'xs',
        type: 'solid'
      }
    },
  }
})
