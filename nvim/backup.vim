" SET CONFIGS
set tabstop=4               " number of columns occupied by a tab 
set softtabstop=4           " see multiple spaces as tabstops so <BS> does the right thing
set shiftwidth=4            " width for autoindents
set autoindent              " indent a new line the same amount as the line just typed
set number                  " add line numbers
set mouse=a                 " enable mouse click
set clipboard=unnamedplus   " using system clipboard

" TRUE COLORS
if exists('+termguicolors')
  let &t_8f = "\<Esc>[38;2;%lu;%lu;%lum"
  let &t_8b = "\<Esc>[48;2;%lu;%lu;%lum"
  set termguicolors
endif



" VIM PLUG
call plug#begin(has('nvim') ? stdpath('data') . '/plugged' : '~/.vim/plugged')

" LIST OF PLUGINS
"	------Themes------
	Plug 'sonph/onehalf', { 'rtp': 'vim' }
	Plug 'joshdick/onedark.vim'
"	------Vim Airline------
	Plug 'vim-airline/vim-airline'
"	------Greeter------
" List ends here. Plugins become visible to Vim after this call.
call plug#end()

" SET THEME
colorscheme onehalfdark

