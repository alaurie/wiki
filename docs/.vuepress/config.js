module.exports = {
  title: 'AlmaLinux Wiki',
  description: 'AlmaLinux OS Documentation',
  head: [
    ['link', { rel: "shortcut icon", type: 'image/png', href: "/images/logo.png"}],
  ],
  base: '/',
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: 'Home', link: 'https://almalinux.org/' },
      { text: 'Chat', link: 'https://chat.almalinux.org/' },
      { text: 'Mailing Lists', link: 'https://lists.almalinux.org/' },
      { text: 'Bugs', link: 'https://bugs.almalinux.org/' }
    ],
    sidebar: [
      '/',
      {
        title: 'Release Notes',
        children: [
          '/release-notes/8.5',
          '/release-notes/8.5-beta',
          '/release-notes/8.4-arm',
          '/release-notes/8.4',
          '/release-notes/8.4-beta-arm',
          '/release-notes/8.4-beta',
          '/release-notes/8.3',
          '/release-notes/8.3-rc',
          '/release-notes/8.3-beta'
        ]
      },
      {
        title: 'Documentation',
        children: [
           {
             title: 'Release Notes',
             path: '/documentation/release-notes',
             children: [
               '/documentation/release-notes/8.5',
               '/documentation/release-notes/8.5-beta',
               '/documentation/release-notes/8.4-arm',
               '/documentation/release-notes/8.4',
               '/documentation/release-notes/8.4-beta-arm',
               '/documentation/release-notes/8.4-beta',
               '/documentation/release-notes/8.3',
               '/documentation/release-notes/8.3-rc',
               '/documentation/release-notes/8.3-beta'
             ]
           },
           {
             title: 'ELevate Project',
             path: '/documentation/elevate/',
             children: [
               '/documentation/elevate/ELevate-quickstart-guide',
               '/documentation/elevate/Contribution-guide',
               '/documentation/elevate/ELevate-frequent-issues'
             ]
           },      
          '/documentation/LiveMedia',
          '/documentation/openscap-guide',
          '/documentation/building-packages-guide',
          '/documentation/Packaging',
          '/documentation/raspberry-pi',
          '/documentation/Howto'
        ]
      },
      {
        title: 'Cloud',
        children: [
          '/cloud/AWS',
          '/cloud/Azure',
          '/cloud/Google',
          '/cloud/Generic-cloud',
          '/cloud/Generic-cloud-on-local',
          '/cloud/OpenNebula'
        ]
      },
      {
        title: 'Containers',
        children: [
          'containers/docker-images'
        ]
      },
      '/LiveMedia',
      {
        title: 'Special interest groups',
        path: '/sigs/',
        children: [
          '/sigs/Core',
          '/sigs/Infrastructure',
          '/sigs/Cloud',
          '/sigs/LiveMedia',
          '/sigs/Migration',
        ]
      },
      { 
        title: 'Repositories',
        path: '/repos/',
        children:[
           '/repos/AlmaLinux',
           '/repos/CentOS',
           '/repos/Extras',
        ]
      },
      {
        title: 'Development',
        children: [
          '/development/Packaging'
        ]
      },
      '/Mirrors',
      {
        title: 'ELevate Project',
        path: '/elevate/',
        children: [
          '/elevate/ELevate-quickstart-guide',
          '/elevate/Contribution-guide',
          '/elevate/ELevate-frequent-issues'
        ]
      },
      '/FAQ',
      '/Comparison',
      '/Howto',
      '/Contribute',
	  '/Transparency'
    ],
    // AlmaLinux organization on GitHub
    repo: 'AlmaLinux/',
    // wiki repository settings
    docsRepo: 'AlmaLinux/wiki',
    docsDir: 'docs',
    docsBranch: 'master',
    // editing works only for users with the repository write-access so we
    // disabled it to avoid confusion
    editLinks: false
  }
}
