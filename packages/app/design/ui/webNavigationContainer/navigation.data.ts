import { TNavigationMenuItem } from 'app/design/ui/webNavigationContainer/types'

export const navigationData: TNavigationMenuItem[] = [
  { title: 'Главная', link: '/' },
  { title: 'Выданные наряды', link: '/issued-task-list' },
  { title: 'Полученные наряды', link: '/received-task-list' },
  { title: 'Ответственные наряды', link: '/responsible-task-list' }
]