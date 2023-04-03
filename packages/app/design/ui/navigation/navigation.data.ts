import { TNavigationMenuItem } from 'app/design/ui/navigation/types'

export const navigationData: TNavigationMenuItem[] = [
  { iconName: 'home', title: 'Главная', link: '/' },
  { iconName: 'chevrons-up', title: 'Выданные', link: '/issued-task-list' },
  { iconName: 'chevrons-down', title: 'Полученные', link: '/received-task-list' },
  { iconName: 'alert-octagon', title: 'Ответственные', link: '/responsible-task-list' }
]