import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import TemplateName from './TemplateName'

export default {
  title: 'TemplateName',
  component: TemplateName
}

const Template: Story<ComponentProps<typeof TemplateName>> = (args) => <TemplateName {...args} />

export const DefaultStory = Template.bind({})
DefaultStory.args = {}
