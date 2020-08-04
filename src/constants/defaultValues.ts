export const defaultValues = {
  showThreeDots: true,
  hideArrowJumper: false,
  showQuickJumper: false,
  showDoubleArrowJumper: true,
  showSizeChanger: false,
  isSimple: false,
  isChecked: false,
  isDefaultChecked: false,
  isDisabled: false,
  isPartiallyChecked: false,
  isFullWidth: false,
  isRound: false,
  isRotating: false,
  isLoading: false,
  isAlternative: false,
  autoFocus: false,
  isMulti: false,
  iconRight: false,
  iconLeft: false,
  isBordered: false,
  tabs: [
    {
      value: `1`,
      label: `Tab 1`
    },
    {
      value: `2`,
      label: `Tab 2`
    },
    {
      value: `3`,
      label: `Tab 3`
    },
    {
      value: `4`,
      label: `Tab 4`
    }
  ],
  className: `atlantic-component`,
  direction: 'horizontal',
  selectDefaultValueOne: 'value 1',
  selectDefaultValueTwo: 'value 2',
  place: 'top',
  textOn: 'on',
  textOff: 'off',
  primaryButtonContent: 'Potvrdit',
  secondaryButtonContent: 'Zavřít',
  iconName: 'hamburger',
  tooltipType: 'dark',
  event: 'mouseenter',
  eventOff: 'mouseleave',
  type: 'default',
  size: 'medium',
  position: 'left',
  children: 'Change me, please 🥺',
  value: 'Change me, please 🥺',
  selectValue: [{ value: 'Change me, please 🥺' }],
  visibleRows: 5,
  options: [
    { value: 'value1', label: 'First option' },
    { value: 'value2', label: 'Second option' },
    { value: 'value3', label: 'Third option' }
  ],
  chosenText: (chosen: string, outOf: string) => {
    const object = {
      chosen: '',
      outOf: ''
    };
    object.chosen = chosen;
    object.outOf = outOf;

    return object;
  },
  closeText: 'Zavřít',
  submitText: 'Potvrdit',
  deleteAllText: 'Odebrat vše',
  placeholder: 'Change me, please 🥺',
  defaultValue: 'Change me, please 🥺',
  notificationContent: 'Change me, please 🥺',
  notificationTitle: 'Notification',
  notificationButonIcon: null,
  content: 'Change me, please 🥺',
  messageType: 'primary',
  shape: 'circle',
  width: 20,
  height: 50,
  pageSizeOptions: [10, 20, 30, 40, 50],
  total: 1000,
  index: 0,
  sortBy: `name`,
  order: 'asc',
  dumbText:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Donec iaculis gravida nulla. Maecenas aliquet accumsan leo. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Etiam dictum tincidunt diam. Integer tempor. Maecenas libero. Aliquam id dolor. Nulla non arcu lacinia neque faucibus fringilla. Aenean placerat. Fusce tellus. Donec vitae arcu. Mauris elementum mauris vitae tortor.\n' +
    '\n' +
    'Integer lacinia. Etiam dictum tincidunt diam. Integer vulputate sem a nibh rutrum consequat. Fusce nibh. Praesent in mauris eu tortor porttitor accumsan. Etiam commodo dui eget wisi. Nulla est. Proin in tellus sit amet nibh dignissim sagittis. Nulla quis diam. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Nulla pulvinar eleifend sem. Duis risus.\n' +
    '\n' +
    'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nulla non arcu lacinia neque faucibus fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Vivamus luctus egestas leo. Nulla est. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Curabitur sagittis hendrerit ante. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim.\n' +
    '\n' +
    'Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Vestibulum fermentum tortor id mi. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Phasellus et lorem id felis nonummy placerat. Vivamus ac leo pretium faucibus. Vivamus porttitor turpis ac leo. Nulla pulvinar eleifend sem. Phasellus rhoncus. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam neque. Phasellus rhoncus. Quisque tincidunt scelerisque libero. Maecenas sollicitudin. Praesent id justo in neque elementum ultrices. Cras elementum. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus.\n' +
    '\n' +
    'Vivamus porttitor turpis ac leo. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Vestibulum fermentum tortor id mi. Etiam commodo dui eget wisi. Vestibulum fermentum tortor id mi. Et harum quidem rerum facilis est et expedita distinctio. Nullam faucibus mi quis velit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Mauris tincidunt sem sed arcu. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Aliquam ante. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum.'
};
