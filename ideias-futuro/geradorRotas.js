const routes = [
  { method: 'get',
    path: '/',
    action: find
  },
  { method: 'get',
    path: '/:id',
    action: findOne
  },
  { method: 'post',
    path: '/',
    action: create
  },
  { method: 'put',
    path: '/:id',
    action: update
  },
  { method: 'delete',
    path: '/:id',
    action: remove
  }
]
