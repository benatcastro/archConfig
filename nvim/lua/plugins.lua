-- This file can be loaded by calling `lua require('plugins')` from your init.vim

-- Only required if you have packer configured as `opt`
vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function()
	-- Packer can manage itself
	use 'wbthomason/packer.nvim'
	-- StartUp -- 
use {
    'goolord/alpha-nvim',
    config = function ()
        require'alpha'.setup(require'alpha.themes.dashboard'.config)
    end
}
	-- Auto Pair--
	use 'tmsvg/pear-tree'
	-- Themes --
	use 'sonph/onehalf'
	-- Coc --
	use {'neoclide/coc.nvim', branch = 'release'}
	-- Airline --
	use 'vim-airline/vim-airline'
	use 'vim-airline/vim-airline-themes'
	-- Startyfy -- 
	--use 'mhinz/vim-startify'
	-- Fugitive Git --
	use 'tpope/vim-fugitive'
	-- Syntastic -- 
	use 'scrooloose/syntastic'
	-- Nerd Tree --
	use 'scrooloose/nerdtree'
	use 'Xuyuanp/nerdtree-git-plugin'
	use 'ryanoasis/vim-devicons'
end)
