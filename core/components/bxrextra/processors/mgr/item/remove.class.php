<?php
/**
 * Remove an Item.
 * 
 * @package bxrextra
 * @subpackage processors
 */
class BxrExtraItemRemoveProcessor extends modObjectRemoveProcessor {
    public $classKey = 'BxrExtraItem';
    public $languageTopics = array('bxrextra:default');
    public $objectType = 'bxrextra.items';
}
return 'BxrExtraItemRemoveProcessor';