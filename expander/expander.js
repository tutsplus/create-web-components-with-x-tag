document.addEventListener('DOMComponentsLoaded', function () {
    xtag.register('x-pander', {
        content: function () {
            /*
                <header>
                    <h1>Expander Heading</h1>
                </header>
                <div class="expandable">
                    <p>Expander content</p>
                </div>
            */
        },
        lifecycle: {
            created: function () {
                var header = this.querySelector('header'),
                    expander = document.createElement('a');

                expander.classList.add('expander');
                expander.textContent = 'Show';
                expander.href = 'javascript:void(0)';

                header.appendChild(expander);

                this.contentElement = this.querySelector('.expandable');

                if (this.collapseByDefault) {
                    this.collapse();
                }
            }
        },
        accessors: {
            collapseByDefault: {
                attribute: {},
                set: function (value) {
                    this.xtag.data.collapseByDefault = value;
                },
                get: function () {
                    return this.getAttribute('collapse-by-default');
                }
            }
        },
        methods: {
            collapse: function () {
                this.contentElement.classList.remove('expanded');
                this.contentElement.classList.add('collapsed');
            },
            expand: function () {
                this.contentElement.classList.remove('collapsed');
                this.contentElement.classList.add('expanded');
            }
        },
        events: {
            click: function (event) {
                if (event.target.classList.contains('expander')) {
                    if (this.contentElement.classList.contains('collapsed')) {
                        this.expand();
                    } else {
                        this.collapse();
                    }
                }
            }
        }
    });
});
