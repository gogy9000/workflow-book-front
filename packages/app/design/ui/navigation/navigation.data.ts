import { TNavigationMenuItem } from 'app/design/ui/navigation/types'

export const navigationData: TNavigationMenuItem[] = [
  { iconName: 'home', title: 'Главная', link: '/' },
  { iconName: 'bar-chart', title: 'Выданные наряды', link: '/issued-task-list' },
  { iconName: 'search', title: 'Полученные наряды', link: '/received-task-list' },
  { iconName: 'heart', title: 'Ответственные наряды', link: '/responsible-task-list' }
]