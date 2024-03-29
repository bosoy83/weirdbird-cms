<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Cms_Templates extends Controller_Cms_Data
{
	public $siteTemplatesFolder = SITETEMPLATEPATH; // as defined in index.php
	
	private function getTemplateFolders()
	{
		return glob($this->siteTemplatesFolder . '/*' , GLOB_ONLYDIR);
	}
	
	/**
	* Retrieve all template data as json object
	*/
	public function action_data()
	{
		$ret = '[';

		$templateArr = array_map(
			create_function(
				'$obj', 
				'return $obj->as_array();'
			),
			ORM::factory('Template')->find_all()->as_array()
		);

		foreach ($templateArr as $t) {
			$modulesArr = array_map(
				create_function(
					'$obj',
					'return $obj->as_array();'
				),
				ORM::factory('Module')->where('template_id','=',$t['id'])->find_all()->as_array()		
			);

			$layoutsArr = array_map(
				create_function(
					'$obj',
					'return $obj->as_array();'
				),
				ORM::factory('Layout')->where('template_id','=',$t['id'])->find_all()->as_array()		
			);

			$t['modules'] = $modulesArr;
			$t['layouts'] = $layoutsArr;

			if ($ret != '[')
				$ret .= ',';
			$ret .= json_encode($t);
		}

		$ret .= ']';
		//die();

		$this->template->encoding = 'standard';	// since we are building a json string here, double
												// JSON encoding would make no sense
		$this->template->result = $ret;
	}

	public function action_read()
	{
		$this->action_data();
	}

	/**
	* Import all template configurations into the db from the config.xml files
	*/
	public function action_import()
	{
		// remove all current templates from db
		foreach(ORM::factory('Template')->find_all() as $t) $t->delete();
		foreach(ORM::factory('Structure')->find_all() as $s) {
			$s->layout_id = null;
			$s->save();
		}
		foreach(ORM::factory('Layout')->find_all() as $l) $l->delete();
		foreach(ORM::factory('Module')->find_all() as $m) $m->delete();
		foreach(ORM::factory('Loadfile')->find_all() as $l) $l->delete();
		// remove all article <-> structure_column_mappings mappings
		foreach(ORM::factory('Article')->find_all() as $a) {
			$a->structure_column_mapping_id = null;
			$a->save();
		}
		// remove alle structure <-> column mappings
		foreach(ORM::factory('StructureColumnMapping')->find_all() as $s) $s->delete();

		// read data from config.xml and write it to db
		$templateFolders = $this->getTemplateFolders();
		foreach ($templateFolders as $folder) {
			$str = file_get_contents($folder . '/config.xml');

			// parse config.xml file
			$xml = simplexml_load_string($str);
			//var_dump($xml->views);

			// add general template informations
			$template = ORM::factory('Template');
			$template->active = false;
			$template->name = $xml->name;
			$template->description = $xml->description;
			$template->folder = $folder;
			$template->folder_css = $xml->stylesheet->folder;
			$template->folder_js = $xml->javascript->folder;
			$template->folder_views = $xml->views->folder;
			$template->folder_images = $xml->images->folder;
			$template->folder_preview = $xml->preview->folder;
			$template->previewimage_filename = $xml->preview->previewimage->filename;
			$template->previewimage_description = $xml->preview->previewimage->description;
			$template->save();

			// add layouts
			foreach($xml->layouts->layout as $layout) {
				$l = ORM::factory('Layout');
				$l->template_id = $template->id;
				$l->name = $layout->name;
				$l->description = $layout->description;
				$l->view = $layout->view;
				$l->columns = $layout->columns;
				$l->save();
				// add a link of the standard layout (if given) to the template
				$isStandardLayout = (boolean) $layout->attributes()->standard;
				if ($isStandardLayout) {
					$template->standardlayout = $layout->name;
					$template->save();
				}
			}

			// add modules
			foreach ($xml->modules->module as $module) {
				$m = ORM::factory('Module');
				$m->template_id = $template->id;
				$m->name = $module->name;
				$m->description = $module->description;
				$m->view = $module->view;
				$m->allowarticles = ($module->allowarticles == 'true') ? 1 : 0;
				$m->save();
			}

			// add css and js files we want to load automatically
			foreach ($xml->stylesheet->load as $css) {
				$lf = ORM::factory('Loadfile');
				$lf->template_id = $template->id;
				$lf->filename = $css;
				$lf->type = 'css';
				$lf->save();
			}
			foreach ($xml->javascript->load as $js) {
				$lf = ORM::factory('Loadfile');
				$lf->template_id = $template->id;
				$lf->filename = $js;
				$lf->type = 'js';
				// do not forget to save specified type attributes, so
				// we can later decide if a link is external or not
				$lf->custom_type = (string) $js->attributes()->type;
				$lf->save();
			}
		}

		$this->template->result = array( 'success' => true );
	}
	
	/**
	* Set the current template
	*/
	public function action_settemplate()
	{
		// get new active id
		$id = $this->request->param('id');
		
		// set all but the template with the new active id to 'not active'
		$templates = ORM::factory('Template')->find_all();
		foreach ($templates as $t) {
			if ($t->id == $id)
				$t->active = true;
			else
				$t->active = false;
			$t->save();
		}

		$this->template->result = array( 'success' => true );
	}

	/**
	* Returns all the layouts for the currently active template
	*/
	public function action_activelayouts()
	{
		$template = ORM::factory('Template')
						->where('active','=','1')
						->find();
		
		$result = array_map(
			create_function(
				'$obj',
				'return $obj->as_array();'
			),
			ORM::factory('Layout')
				->where('template_id','=',$template->id)
				->find_all()
				->as_array()		
		);
		
		$this->template->result = $result;
	}
}