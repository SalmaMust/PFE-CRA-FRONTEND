import { MenuItem } from './menu.model';



export const MENU: MenuItem[] = [
    
    {
        label: 'Navigation',
        isTitle: true,
        role:'admin'
    },
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/',
        role:'admin',
        badge: {
            variant: 'success',
            text: '1',
        }
        
    },
    {
        label: 'Apps',
        isTitle: true,
        role:'admin'
    },
    {
        label: 'Profil',
        icon: 'file-text',
        link: '/other/pages-profile'
    },
    {
      label: 'Calendar',
        icon: 'calendar',
        link: '/apps-calendar',
        role: 'admin',
    },
    {
        label: 'User',
        icon: 'briefcase',
        role:'admin',
        subItems: [
            {
                label: 'List',
                link: '/apps/utilisateur-list',
            }
        ]
    },
    {
        
            label: 'Client',
            icon: 'bookmark',
            role:'admin',
            subItems: [
                {
                    label: 'List',
                    link: '/apps/list-client',
                    role:'admin',
                },
            ]
    },
    {
        label: 'Project',
        icon: 'briefcase',
        role:'admin',
        subItems: [
            {
                label: 'List',
                link: '/apps/project-list',
                role:'admin',
            }
        ]
    },
    {
        label: 'Tasks',
        icon: 'bookmark',
        role:'admin',
        subItems: [
            {
                label: 'List',
                link: '/apps/list-task',
            }, {
              label: 'Kanban Board',
              link: '/apps/task-board',
          }
           
        ]
    },
    {
      label: 'Absence',
      icon: 'bookmark',
      role:'admin',
      subItems: [
          {
              label: 'List',
              link: '/apps/list-absence',
          }
         
      ]
  },
  {
        label: 'Timesheet',
        icon: 'briefcase',
        role:'admin',
        subItems: [
            {
                label: 'List',
                link: '/apps/list-timesheet',
            }
      
        ]
    }
    
];


export const MENU_EMPLOYEE: MenuItem[] = [
  {
      label: 'Apps',
      isTitle: true,
      role:'admin'
  },
  {
    label: 'Mon profil',
    icon: 'file-text',
    link: '/other/pages-profile'
},
  {
    label: 'Calendar',
      icon: 'calendar',
      link: '/apps-calendar',
      role: 'admin',
  }, 
  {
      /*label: 'Project',
      icon: 'briefcase',
      role:'admin',
      subItems: [
          {
              label: 'List',
              link: '/apps/project-list',
              role:'admin',
          }
      ]*/
      label: 'Mes projets',
      icon: 'briefcase',
      link: '/apps/project-list',
  },
  {
      label: 'Mes tâches',
      icon: 'bookmark',
      role:'admin',
      subItems: [
          {
              label: 'List',
              link: '/apps/list-task',
          }, {
            label: 'Kanban Board',
            link: '/apps/task-board',
        }
         
      ]
  },
  {
    label: 'Mes absences',
    icon: 'bookmark',
    link: '/apps/list-absence',
        
       
    
},
{
      label: 'Mes feuilles',
      icon: 'briefcase',
      link: '/apps/list-timesheet',
         
  } ];


export const MENU_MANAGER: MenuItem[] = [
  {
      label: 'Apps',
      isTitle: true,
      role:'admin'
  },
  {
    label: 'Mon profil',
    icon: 'file-text',
    link: '/other/pages-profile'
},
  {
    label: 'Calendar',
      icon: 'calendar',
      link: '/apps-calendar',
      role: 'admin',
  }, 
  {
    label: 'Mes employés',
    icon: 'briefcase',
    link: '/apps/utilisateur-list',
       
},
  {
      /*label: 'Project',
      icon: 'briefcase',
      role:'admin',
      subItems: [
          {
              label: 'List',
              link: '/apps/project-list',
              role:'admin',
          }
      ]*/
      label: 'Mes projets',
      icon: 'briefcase',
      link: '/apps/project-list',
  },
  {
      label: 'Mes tâches',
      icon: 'bookmark',
      role:'admin',
      subItems: [
          {
              label: 'List',
              link: '/apps/list-task',
          }, {
            label: 'Kanban Board',
            link: '/apps/task-board',
        }
         
      ]
  },
  {
    label: 'Mes absences',
    icon: 'bookmark',
    link: '/apps/list-absence',
       
},
{
      label: 'Mes feuilles',
      icon: 'briefcase',
      link: '/apps/list-timesheet'
  } ];


export const MENU_RESPONSABLE: MenuItem[] = [
    
  {
      label: 'Apps',
      isTitle: true,
      role:'admin'
  },
  {
    label: 'Mon profil',
    icon: 'file-text',
    link: '/other/pages-profile'
},
  {
    label: 'Calendar',
      icon: 'calendar',
      link: '/apps-calendar',
      role: 'admin',
  }, 
  {
      /*label: 'Project',
      icon: 'briefcase',
      role:'admin',
      subItems: [
          {
              label: 'List',
              link: '/apps/project-list',
              role:'admin',
          }
      ]*/
      label: 'Mes projets',
      icon: 'briefcase',
      link: '/apps/project-list',
  },
  {
      label: 'Mes tâches',
      icon: 'bookmark',
      role:'admin',
      subItems: [
          {
              label: 'List',
              link: '/apps/list-task',
          }, {
            label: 'Kanban Board',
            link: '/apps/task-board',
        }
         
      ]
  },
  {
    label: 'Mes absences',
    icon: 'bookmark',
    link: '/apps/list-absence',
     
},
{
      label: 'Mes feuilles ',
      icon: 'briefcase',
      link: '/apps/list-timesheet',
          
  }
   ];
