<?php
/**
 * Get list Items
 *
 * @package bxrextra
 * @subpackage processors
 */
class BxrExtraItemGetListProcessor extends modObjectGetListProcessor {
    public $classKey = 'BxrExtraItem';
    public $languageTopics = array('bxrextra:default');
    public $defaultSortField = 'position';
    public $defaultSortDirection = 'ASC';
    public $objectType = 'bxrextra.items';

    public function prepareQueryBeforeCount(xPDOQuery $c) {
        $query = $this->getProperty('query');
        if (!empty($query)) {
            $c->where(array(
                    'name:LIKE' => '%'.$query.'%',
                    'OR:description:LIKE' => '%'.$query.'%',
                ));
        }
        return $c;
    }
}
return 'BxrExtraItemGetListProcessor';