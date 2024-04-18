import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './table-10.reducer';

export const Table10Detail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const table10Entity = useAppSelector(state => state.table10.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="table10DetailsHeading">
          <Translate contentKey="App.table10.detail.title">Table10</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{table10Entity.id}</dd>
          <dt>
            <span id="numLigne1">
              <Translate contentKey="App.table10.numLigne1">Num Ligne 1</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numLigne1}</dd>
          <dt>
            <span id="resort2">
              <Translate contentKey="App.table10.resort2">Resort 2</Translate>
            </span>
          </dt>
          <dd>{table10Entity.resort2}</dd>
          <dt>
            <span id="resvNameId3">
              <Translate contentKey="App.table10.resvNameId3">Resv Name Id 3</Translate>
            </span>
          </dt>
          <dd>{table10Entity.resvNameId3}</dd>
          <dt>
            <span id="clientOId4">
              <Translate contentKey="App.table10.clientOId4">Client O Id 4</Translate>
            </span>
          </dt>
          <dd>{table10Entity.clientOId4}</dd>
          <dt>
            <span id="typeChb5">
              <Translate contentKey="App.table10.typeChb5">Type Chb 5</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeChb5}</dd>
          <dt>
            <span id="confirmationNo6">
              <Translate contentKey="App.table10.confirmationNo6">Confirmation No 6</Translate>
            </span>
          </dt>
          <dd>{table10Entity.confirmationNo6}</dd>
          <dt>
            <span id="clientMdmId7">
              <Translate contentKey="App.table10.clientMdmId7">Client Mdm Id 7</Translate>
            </span>
          </dt>
          <dd>{table10Entity.clientMdmId7}</dd>
          <dt>
            <span id="nameId8">
              <Translate contentKey="App.table10.nameId8">Name Id 8</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nameId8}</dd>
          <dt>
            <span id="parentResvNameId9">
              <Translate contentKey="App.table10.parentResvNameId9">Parent Resv Name Id 9</Translate>
            </span>
          </dt>
          <dd>{table10Entity.parentResvNameId9}</dd>
          <dt>
            <span id="contactId10">
              <Translate contentKey="App.table10.contactId10">Contact Id 10</Translate>
            </span>
          </dt>
          <dd>{table10Entity.contactId10}</dd>
          <dt>
            <span id="agenceId11">
              <Translate contentKey="App.table10.agenceId11">Agence Id 11</Translate>
            </span>
          </dt>
          <dd>{table10Entity.agenceId11}</dd>
          <dt>
            <span id="agenceNom12">
              <Translate contentKey="App.table10.agenceNom12">Agence Nom 12</Translate>
            </span>
          </dt>
          <dd>{table10Entity.agenceNom12}</dd>
          <dt>
            <span id="societeId13">
              <Translate contentKey="App.table10.societeId13">Societe Id 13</Translate>
            </span>
          </dt>
          <dd>{table10Entity.societeId13}</dd>
          <dt>
            <span id="groupeId14">
              <Translate contentKey="App.table10.groupeId14">Groupe Id 14</Translate>
            </span>
          </dt>
          <dd>{table10Entity.groupeId14}</dd>
          <dt>
            <span id="numBloc15">
              <Translate contentKey="App.table10.numBloc15">Num Bloc 15</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numBloc15}</dd>
          <dt>
            <span id="typeResv16">
              <Translate contentKey="App.table10.typeResv16">Type Resv 16</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeResv16}</dd>
          <dt>
            <span id="statutResv17">
              <Translate contentKey="App.table10.statutResv17">Statut Resv 17</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutResv17}</dd>
          <dt>
            <span id="dateDebutResv18">
              <Translate contentKey="App.table10.dateDebutResv18">Date Debut Resv 18</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateDebutResv18 ? (
              <TextFormat value={table10Entity.dateDebutResv18} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateFinResv19">
              <Translate contentKey="App.table10.dateFinResv19">Date Fin Resv 19</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateFinResv19 ? (
              <TextFormat value={table10Entity.dateFinResv19} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateDebutResv20">
              <Translate contentKey="App.table10.truncDateDebutResv20">Trunc Date Debut Resv 20</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.truncDateDebutResv20 ? (
              <TextFormat value={table10Entity.truncDateDebutResv20} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateFinResv21">
              <Translate contentKey="App.table10.truncDateFinResv21">Trunc Date Fin Resv 21</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.truncDateFinResv21 ? (
              <TextFormat value={table10Entity.truncDateFinResv21} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateAnnResv22">
              <Translate contentKey="App.table10.dateAnnResv22">Date Ann Resv 22</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateAnnResv22 ? (
              <TextFormat value={table10Entity.dateAnnResv22} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="pseudoRoomYn23">
              <Translate contentKey="App.table10.pseudoRoomYn23">Pseudo Room Yn 23</Translate>
            </span>
          </dt>
          <dd>{table10Entity.pseudoRoomYn23}</dd>
          <dt>
            <span id="createurResv24">
              <Translate contentKey="App.table10.createurResv24">Createur Resv 24</Translate>
            </span>
          </dt>
          <dd>{table10Entity.createurResv24}</dd>
          <dt>
            <span id="nomCreateurResv25">
              <Translate contentKey="App.table10.nomCreateurResv25">Nom Createur Resv 25</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nomCreateurResv25}</dd>
          <dt>
            <span id="codeGarantie26">
              <Translate contentKey="App.table10.codeGarantie26">Code Garantie 26</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeGarantie26}</dd>
          <dt>
            <span id="flgDed27">
              <Translate contentKey="App.table10.flgDed27">Flg Ded 27</Translate>
            </span>
          </dt>
          <dd>{table10Entity.flgDed27}</dd>
          <dt>
            <span id="codePays28">
              <Translate contentKey="App.table10.codePays28">Code Pays 28</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codePays28}</dd>
          <dt>
            <span id="libPays29">
              <Translate contentKey="App.table10.libPays29">Lib Pays 29</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libPays29}</dd>
          <dt>
            <span id="codeNationalite30">
              <Translate contentKey="App.table10.codeNationalite30">Code Nationalite 30</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeNationalite30}</dd>
          <dt>
            <span id="libNationalite31">
              <Translate contentKey="App.table10.libNationalite31">Lib Nationalite 31</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libNationalite31}</dd>
          <dt>
            <span id="codeSource32">
              <Translate contentKey="App.table10.codeSource32">Code Source 32</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeSource32}</dd>
          <dt>
            <span id="libSource33">
              <Translate contentKey="App.table10.libSource33">Lib Source 33</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libSource33}</dd>
          <dt>
            <span id="codeGrandSource34">
              <Translate contentKey="App.table10.codeGrandSource34">Code Grand Source 34</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeGrandSource34}</dd>
          <dt>
            <span id="codeOrigine35">
              <Translate contentKey="App.table10.codeOrigine35">Code Origine 35</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeOrigine35}</dd>
          <dt>
            <span id="libOrigine36">
              <Translate contentKey="App.table10.libOrigine36">Lib Origine 36</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libOrigine36}</dd>
          <dt>
            <span id="codeMarche37">
              <Translate contentKey="App.table10.codeMarche37">Code Marche 37</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeMarche37}</dd>
          <dt>
            <span id="libMarche38">
              <Translate contentKey="App.table10.libMarche38">Lib Marche 38</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libMarche38}</dd>
          <dt>
            <span id="codeGrandMarche39">
              <Translate contentKey="App.table10.codeGrandMarche39">Code Grand Marche 39</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeGrandMarche39}</dd>
          <dt>
            <span id="libGrandMarche40">
              <Translate contentKey="App.table10.libGrandMarche40">Lib Grand Marche 40</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libGrandMarche40}</dd>
          <dt>
            <span id="codePrix41">
              <Translate contentKey="App.table10.codePrix41">Code Prix 41</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codePrix41}</dd>
          <dt>
            <span id="categPrix42">
              <Translate contentKey="App.table10.categPrix42">Categ Prix 42</Translate>
            </span>
          </dt>
          <dd>{table10Entity.categPrix42}</dd>
          <dt>
            <span id="libPrix43">
              <Translate contentKey="App.table10.libPrix43">Lib Prix 43</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libPrix43}</dd>
          <dt>
            <span id="numChb44">
              <Translate contentKey="App.table10.numChb44">Num Chb 44</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numChb44}</dd>
          <dt>
            <span id="descriptionTypeChb45">
              <Translate contentKey="App.table10.descriptionTypeChb45">Description Type Chb 45</Translate>
            </span>
          </dt>
          <dd>{table10Entity.descriptionTypeChb45}</dd>
          <dt>
            <span id="codeTypeChb46">
              <Translate contentKey="App.table10.codeTypeChb46">Code Type Chb 46</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeTypeChb46}</dd>
          <dt>
            <span id="classChb47">
              <Translate contentKey="App.table10.classChb47">Class Chb 47</Translate>
            </span>
          </dt>
          <dd>{table10Entity.classChb47}</dd>
          <dt>
            <span id="caractChb48">
              <Translate contentKey="App.table10.caractChb48">Caract Chb 48</Translate>
            </span>
          </dt>
          <dd>{table10Entity.caractChb48}</dd>
          <dt>
            <span id="typeChbDeReservation49">
              <Translate contentKey="App.table10.typeChbDeReservation49">Type Chb De Reservation 49</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeChbDeReservation49}</dd>
          <dt>
            <span id="descriptionTypeChbDeResv50">
              <Translate contentKey="App.table10.descriptionTypeChbDeResv50">Description Type Chb De Resv 50</Translate>
            </span>
          </dt>
          <dd>{table10Entity.descriptionTypeChbDeResv50}</dd>
          <dt>
            <span id="codeTypeChbDeResv51">
              <Translate contentKey="App.table10.codeTypeChbDeResv51">Code Type Chb De Resv 51</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeTypeChbDeResv51}</dd>
          <dt>
            <span id="statutDeReservation52">
              <Translate contentKey="App.table10.statutDeReservation52">Statut De Reservation 52</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutDeReservation52}</dd>
          <dt>
            <span id="circuitDistribution53">
              <Translate contentKey="App.table10.circuitDistribution53">Circuit Distribution 53</Translate>
            </span>
          </dt>
          <dd>{table10Entity.circuitDistribution53}</dd>
          <dt>
            <span id="circuitDistribUserRegroup54">
              <Translate contentKey="App.table10.circuitDistribUserRegroup54">Circuit Distrib User Regroup 54</Translate>
            </span>
          </dt>
          <dd>{table10Entity.circuitDistribUserRegroup54}</dd>
          <dt>
            <span id="numCrs55">
              <Translate contentKey="App.table10.numCrs55">Num Crs 55</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numCrs55}</dd>
          <dt>
            <span id="typeRefCrs56">
              <Translate contentKey="App.table10.typeRefCrs56">Type Ref Crs 56</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeRefCrs56}</dd>
          <dt>
            <span id="crsInsertDate57">
              <Translate contentKey="App.table10.crsInsertDate57">Crs Insert Date 57</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.crsInsertDate57 ? (
              <TextFormat value={table10Entity.crsInsertDate57} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateCreaResv58">
              <Translate contentKey="App.table10.dateCreaResv58">Date Crea Resv 58</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateCreaResv58 ? (
              <TextFormat value={table10Entity.dateCreaResv58} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="datePremier59">
              <Translate contentKey="App.table10.datePremier59">Date Premier 59</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.datePremier59 ? (
              <TextFormat value={table10Entity.datePremier59} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutPremier60">
              <Translate contentKey="App.table10.statutPremier60">Statut Premier 60</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutPremier60}</dd>
          <dt>
            <span id="dateDernier61">
              <Translate contentKey="App.table10.dateDernier61">Date Dernier 61</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateDernier61 ? (
              <TextFormat value={table10Entity.dateDernier61} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernier62">
              <Translate contentKey="App.table10.statutDernier62">Statut Dernier 62</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutDernier62}</dd>
          <dt>
            <span id="dateDernierPseudo63">
              <Translate contentKey="App.table10.dateDernierPseudo63">Date Dernier Pseudo 63</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateDernierPseudo63 ? (
              <TextFormat value={table10Entity.dateDernierPseudo63} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernierPseudo64">
              <Translate contentKey="App.table10.statutDernierPseudo64">Statut Dernier Pseudo 64</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutDernierPseudo64}</dd>
          <dt>
            <span id="diffDtCreaAnn65">
              <Translate contentKey="App.table10.diffDtCreaAnn65">Diff Dt Crea Ann 65</Translate>
            </span>
          </dt>
          <dd>{table10Entity.diffDtCreaAnn65}</dd>
          <dt>
            <span id="diffDtArrAnn66">
              <Translate contentKey="App.table10.diffDtArrAnn66">Diff Dt Arr Ann 66</Translate>
            </span>
          </dt>
          <dd>{table10Entity.diffDtArrAnn66}</dd>
          <dt>
            <span id="leadtime67">
              <Translate contentKey="App.table10.leadtime67">Leadtime 67</Translate>
            </span>
          </dt>
          <dd>{table10Entity.leadtime67}</dd>
          <dt>
            <span id="los68">
              <Translate contentKey="App.table10.los68">Los 68</Translate>
            </span>
          </dt>
          <dd>{table10Entity.los68}</dd>
          <dt>
            <span id="occupantsGroupe69">
              <Translate contentKey="App.table10.occupantsGroupe69">Occupants Groupe 69</Translate>
            </span>
          </dt>
          <dd>{table10Entity.occupantsGroupe69}</dd>
          <dt>
            <span id="nbNuitee70">
              <Translate contentKey="App.table10.nbNuitee70">Nb Nuitee 70</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbNuitee70}</dd>
          <dt>
            <span id="nbNuiteeNnDed71">
              <Translate contentKey="App.table10.nbNuiteeNnDed71">Nb Nuitee Nn Ded 71</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbNuiteeNnDed71}</dd>
          <dt>
            <span id="nbResvAnn72">
              <Translate contentKey="App.table10.nbResvAnn72">Nb Resv Ann 72</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbResvAnn72}</dd>
          <dt>
            <span id="nbAdu73">
              <Translate contentKey="App.table10.nbAdu73">Nb Adu 73</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbAdu73}</dd>
          <dt>
            <span id="nbEnf74">
              <Translate contentKey="App.table10.nbEnf74">Nb Enf 74</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbEnf74}</dd>
          <dt>
            <span id="nbPersDayU75">
              <Translate contentKey="App.table10.nbPersDayU75">Nb Pers Day U 75</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersDayU75}</dd>
          <dt>
            <span id="nbPersArr76">
              <Translate contentKey="App.table10.nbPersArr76">Nb Pers Arr 76</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersArr76}</dd>
          <dt>
            <span id="nbPersDep77">
              <Translate contentKey="App.table10.nbPersDep77">Nb Pers Dep 77</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersDep77}</dd>
          <dt>
            <span id="nbPersAnn78">
              <Translate contentKey="App.table10.nbPersAnn78">Nb Pers Ann 78</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersAnn78}</dd>
          <dt>
            <span id="nbPersNoshow79">
              <Translate contentKey="App.table10.nbPersNoshow79">Nb Pers Noshow 79</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersNoshow79}</dd>
          <dt>
            <span id="nbChbDayU80">
              <Translate contentKey="App.table10.nbChbDayU80">Nb Chb Day U 80</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbDayU80}</dd>
          <dt>
            <span id="nbChbArr81">
              <Translate contentKey="App.table10.nbChbArr81">Nb Chb Arr 81</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbArr81}</dd>
          <dt>
            <span id="nbChbDep82">
              <Translate contentKey="App.table10.nbChbDep82">Nb Chb Dep 82</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbDep82}</dd>
          <dt>
            <span id="nbChbAnn83">
              <Translate contentKey="App.table10.nbChbAnn83">Nb Chb Ann 83</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbAnn83}</dd>
          <dt>
            <span id="nbChbNoshow84">
              <Translate contentKey="App.table10.nbChbNoshow84">Nb Chb Noshow 84</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbNoshow84}</dd>
          <dt>
            <span id="revenuNetChambre85">
              <Translate contentKey="App.table10.revenuNetChambre85">Revenu Net Chambre 85</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetChambre85}</dd>
          <dt>
            <span id="revenuTaxeChambre86">
              <Translate contentKey="App.table10.revenuTaxeChambre86">Revenu Taxe Chambre 86</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeChambre86}</dd>
          <dt>
            <span id="revenuNetChambreGlobal87">
              <Translate contentKey="App.table10.revenuNetChambreGlobal87">Revenu Net Chambre Global 87</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetChambreGlobal87}</dd>
          <dt>
            <span id="revenuTaxeChambreGlobal88">
              <Translate contentKey="App.table10.revenuTaxeChambreGlobal88">Revenu Taxe Chambre Global 88</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeChambreGlobal88}</dd>
          <dt>
            <span id="revenuNetBq89">
              <Translate contentKey="App.table10.revenuNetBq89">Revenu Net Bq 89</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetBq89}</dd>
          <dt>
            <span id="revenuTaxeBq90">
              <Translate contentKey="App.table10.revenuTaxeBq90">Revenu Taxe Bq 90</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeBq90}</dd>
          <dt>
            <span id="revenuNetBqGlobal91">
              <Translate contentKey="App.table10.revenuNetBqGlobal91">Revenu Net Bq Global 91</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetBqGlobal91}</dd>
          <dt>
            <span id="revenuTaxeBqGlobal92">
              <Translate contentKey="App.table10.revenuTaxeBqGlobal92">Revenu Taxe Bq Global 92</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeBqGlobal92}</dd>
          <dt>
            <span id="revenuNetExtra93">
              <Translate contentKey="App.table10.revenuNetExtra93">Revenu Net Extra 93</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetExtra93}</dd>
          <dt>
            <span id="revenuTaxeExtra94">
              <Translate contentKey="App.table10.revenuTaxeExtra94">Revenu Taxe Extra 94</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeExtra94}</dd>
          <dt>
            <span id="revenuNetExtraGlobal95">
              <Translate contentKey="App.table10.revenuNetExtraGlobal95">Revenu Net Extra Global 95</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetExtraGlobal95}</dd>
          <dt>
            <span id="revenuTaxeExtraGlobal96">
              <Translate contentKey="App.table10.revenuTaxeExtraGlobal96">Revenu Taxe Extra Global 96</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeExtraGlobal96}</dd>
          <dt>
            <span id="revenuNetTotal97">
              <Translate contentKey="App.table10.revenuNetTotal97">Revenu Net Total 97</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetTotal97}</dd>
          <dt>
            <span id="revenuTaxeTotal98">
              <Translate contentKey="App.table10.revenuTaxeTotal98">Revenu Taxe Total 98</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeTotal98}</dd>
          <dt>
            <span id="revenuNetTotalGlobal99">
              <Translate contentKey="App.table10.revenuNetTotalGlobal99">Revenu Net Total Global 99</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetTotalGlobal99}</dd>
          <dt>
            <span id="revenuTaxeTotalGlobal100">
              <Translate contentKey="App.table10.revenuTaxeTotalGlobal100">Revenu Taxe Total Global 100</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeTotalGlobal100}</dd>
          <dt>
            <span id="prodRevenuChambre101">
              <Translate contentKey="App.table10.prodRevenuChambre101">Prod Revenu Chambre 101</Translate>
            </span>
          </dt>
          <dd>{table10Entity.prodRevenuChambre101}</dd>
          <dt>
            <span id="prodRevenuBq102">
              <Translate contentKey="App.table10.prodRevenuBq102">Prod Revenu Bq 102</Translate>
            </span>
          </dt>
          <dd>{table10Entity.prodRevenuBq102}</dd>
          <dt>
            <span id="prodRevenuExtra103">
              <Translate contentKey="App.table10.prodRevenuExtra103">Prod Revenu Extra 103</Translate>
            </span>
          </dt>
          <dd>{table10Entity.prodRevenuExtra103}</dd>
          <dt>
            <span id="prodRevenuTotal104">
              <Translate contentKey="App.table10.prodRevenuTotal104">Prod Revenu Total 104</Translate>
            </span>
          </dt>
          <dd>{table10Entity.prodRevenuTotal104}</dd>
          <dt>
            <span id="prodChambreNbNuitees105">
              <Translate contentKey="App.table10.prodChambreNbNuitees105">Prod Chambre Nb Nuitees 105</Translate>
            </span>
          </dt>
          <dd>{table10Entity.prodChambreNbNuitees105}</dd>
          <dt>
            <span id="techCreateDate106">
              <Translate contentKey="App.table10.techCreateDate106">Tech Create Date 106</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.techCreateDate106 ? (
              <TextFormat value={table10Entity.techCreateDate106} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdateDate107">
              <Translate contentKey="App.table10.techUpdateDate107">Tech Update Date 107</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.techUpdateDate107 ? (
              <TextFormat value={table10Entity.techUpdateDate107} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="numLigne108">
              <Translate contentKey="App.table10.numLigne108">Num Ligne 108</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numLigne108}</dd>
          <dt>
            <span id="resort109">
              <Translate contentKey="App.table10.resort109">Resort 109</Translate>
            </span>
          </dt>
          <dd>{table10Entity.resort109}</dd>
          <dt>
            <span id="resvNameId110">
              <Translate contentKey="App.table10.resvNameId110">Resv Name Id 110</Translate>
            </span>
          </dt>
          <dd>{table10Entity.resvNameId110}</dd>
          <dt>
            <span id="clientOId111">
              <Translate contentKey="App.table10.clientOId111">Client O Id 111</Translate>
            </span>
          </dt>
          <dd>{table10Entity.clientOId111}</dd>
          <dt>
            <span id="typeChb112">
              <Translate contentKey="App.table10.typeChb112">Type Chb 112</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeChb112}</dd>
          <dt>
            <span id="confirmationNo113">
              <Translate contentKey="App.table10.confirmationNo113">Confirmation No 113</Translate>
            </span>
          </dt>
          <dd>{table10Entity.confirmationNo113}</dd>
          <dt>
            <span id="clientMdmId114">
              <Translate contentKey="App.table10.clientMdmId114">Client Mdm Id 114</Translate>
            </span>
          </dt>
          <dd>{table10Entity.clientMdmId114}</dd>
          <dt>
            <span id="nameId115">
              <Translate contentKey="App.table10.nameId115">Name Id 115</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nameId115}</dd>
          <dt>
            <span id="parentResvNameId116">
              <Translate contentKey="App.table10.parentResvNameId116">Parent Resv Name Id 116</Translate>
            </span>
          </dt>
          <dd>{table10Entity.parentResvNameId116}</dd>
          <dt>
            <span id="contactId117">
              <Translate contentKey="App.table10.contactId117">Contact Id 117</Translate>
            </span>
          </dt>
          <dd>{table10Entity.contactId117}</dd>
          <dt>
            <span id="agenceId118">
              <Translate contentKey="App.table10.agenceId118">Agence Id 118</Translate>
            </span>
          </dt>
          <dd>{table10Entity.agenceId118}</dd>
          <dt>
            <span id="agenceNom119">
              <Translate contentKey="App.table10.agenceNom119">Agence Nom 119</Translate>
            </span>
          </dt>
          <dd>{table10Entity.agenceNom119}</dd>
          <dt>
            <span id="societeId120">
              <Translate contentKey="App.table10.societeId120">Societe Id 120</Translate>
            </span>
          </dt>
          <dd>{table10Entity.societeId120}</dd>
          <dt>
            <span id="groupeId121">
              <Translate contentKey="App.table10.groupeId121">Groupe Id 121</Translate>
            </span>
          </dt>
          <dd>{table10Entity.groupeId121}</dd>
          <dt>
            <span id="numBloc122">
              <Translate contentKey="App.table10.numBloc122">Num Bloc 122</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numBloc122}</dd>
          <dt>
            <span id="typeResv123">
              <Translate contentKey="App.table10.typeResv123">Type Resv 123</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeResv123}</dd>
          <dt>
            <span id="statutResv124">
              <Translate contentKey="App.table10.statutResv124">Statut Resv 124</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutResv124}</dd>
          <dt>
            <span id="dateDebutResv125">
              <Translate contentKey="App.table10.dateDebutResv125">Date Debut Resv 125</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateDebutResv125 ? (
              <TextFormat value={table10Entity.dateDebutResv125} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateFinResv126">
              <Translate contentKey="App.table10.dateFinResv126">Date Fin Resv 126</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateFinResv126 ? (
              <TextFormat value={table10Entity.dateFinResv126} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateDebutResv127">
              <Translate contentKey="App.table10.truncDateDebutResv127">Trunc Date Debut Resv 127</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.truncDateDebutResv127 ? (
              <TextFormat value={table10Entity.truncDateDebutResv127} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateFinResv128">
              <Translate contentKey="App.table10.truncDateFinResv128">Trunc Date Fin Resv 128</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.truncDateFinResv128 ? (
              <TextFormat value={table10Entity.truncDateFinResv128} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateAnnResv129">
              <Translate contentKey="App.table10.dateAnnResv129">Date Ann Resv 129</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateAnnResv129 ? (
              <TextFormat value={table10Entity.dateAnnResv129} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="pseudoRoomYn130">
              <Translate contentKey="App.table10.pseudoRoomYn130">Pseudo Room Yn 130</Translate>
            </span>
          </dt>
          <dd>{table10Entity.pseudoRoomYn130}</dd>
          <dt>
            <span id="createurResv131">
              <Translate contentKey="App.table10.createurResv131">Createur Resv 131</Translate>
            </span>
          </dt>
          <dd>{table10Entity.createurResv131}</dd>
          <dt>
            <span id="nomCreateurResv132">
              <Translate contentKey="App.table10.nomCreateurResv132">Nom Createur Resv 132</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nomCreateurResv132}</dd>
          <dt>
            <span id="codeGarantie133">
              <Translate contentKey="App.table10.codeGarantie133">Code Garantie 133</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeGarantie133}</dd>
          <dt>
            <span id="flgDed134">
              <Translate contentKey="App.table10.flgDed134">Flg Ded 134</Translate>
            </span>
          </dt>
          <dd>{table10Entity.flgDed134}</dd>
          <dt>
            <span id="codePays135">
              <Translate contentKey="App.table10.codePays135">Code Pays 135</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codePays135}</dd>
          <dt>
            <span id="libPays136">
              <Translate contentKey="App.table10.libPays136">Lib Pays 136</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libPays136}</dd>
          <dt>
            <span id="codeNationalite137">
              <Translate contentKey="App.table10.codeNationalite137">Code Nationalite 137</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeNationalite137}</dd>
          <dt>
            <span id="libNationalite138">
              <Translate contentKey="App.table10.libNationalite138">Lib Nationalite 138</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libNationalite138}</dd>
          <dt>
            <span id="codeSource139">
              <Translate contentKey="App.table10.codeSource139">Code Source 139</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeSource139}</dd>
          <dt>
            <span id="libSource140">
              <Translate contentKey="App.table10.libSource140">Lib Source 140</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libSource140}</dd>
          <dt>
            <span id="codeGrandSource141">
              <Translate contentKey="App.table10.codeGrandSource141">Code Grand Source 141</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeGrandSource141}</dd>
          <dt>
            <span id="codeOrigine142">
              <Translate contentKey="App.table10.codeOrigine142">Code Origine 142</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeOrigine142}</dd>
          <dt>
            <span id="libOrigine143">
              <Translate contentKey="App.table10.libOrigine143">Lib Origine 143</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libOrigine143}</dd>
          <dt>
            <span id="codeMarche144">
              <Translate contentKey="App.table10.codeMarche144">Code Marche 144</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeMarche144}</dd>
          <dt>
            <span id="libMarche145">
              <Translate contentKey="App.table10.libMarche145">Lib Marche 145</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libMarche145}</dd>
          <dt>
            <span id="codeGrandMarche146">
              <Translate contentKey="App.table10.codeGrandMarche146">Code Grand Marche 146</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeGrandMarche146}</dd>
          <dt>
            <span id="libGrandMarche147">
              <Translate contentKey="App.table10.libGrandMarche147">Lib Grand Marche 147</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libGrandMarche147}</dd>
          <dt>
            <span id="codePrix148">
              <Translate contentKey="App.table10.codePrix148">Code Prix 148</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codePrix148}</dd>
          <dt>
            <span id="categPrix149">
              <Translate contentKey="App.table10.categPrix149">Categ Prix 149</Translate>
            </span>
          </dt>
          <dd>{table10Entity.categPrix149}</dd>
          <dt>
            <span id="libPrix150">
              <Translate contentKey="App.table10.libPrix150">Lib Prix 150</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libPrix150}</dd>
          <dt>
            <span id="numChb151">
              <Translate contentKey="App.table10.numChb151">Num Chb 151</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numChb151}</dd>
          <dt>
            <span id="descriptionTypeChb152">
              <Translate contentKey="App.table10.descriptionTypeChb152">Description Type Chb 152</Translate>
            </span>
          </dt>
          <dd>{table10Entity.descriptionTypeChb152}</dd>
          <dt>
            <span id="codeTypeChb153">
              <Translate contentKey="App.table10.codeTypeChb153">Code Type Chb 153</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeTypeChb153}</dd>
          <dt>
            <span id="classChb154">
              <Translate contentKey="App.table10.classChb154">Class Chb 154</Translate>
            </span>
          </dt>
          <dd>{table10Entity.classChb154}</dd>
          <dt>
            <span id="caractChb155">
              <Translate contentKey="App.table10.caractChb155">Caract Chb 155</Translate>
            </span>
          </dt>
          <dd>{table10Entity.caractChb155}</dd>
          <dt>
            <span id="typeChbDeReservation156">
              <Translate contentKey="App.table10.typeChbDeReservation156">Type Chb De Reservation 156</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeChbDeReservation156}</dd>
          <dt>
            <span id="descriptionTypeChbDeResv157">
              <Translate contentKey="App.table10.descriptionTypeChbDeResv157">Description Type Chb De Resv 157</Translate>
            </span>
          </dt>
          <dd>{table10Entity.descriptionTypeChbDeResv157}</dd>
          <dt>
            <span id="codeTypeChbDeResv158">
              <Translate contentKey="App.table10.codeTypeChbDeResv158">Code Type Chb De Resv 158</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeTypeChbDeResv158}</dd>
          <dt>
            <span id="statutDeReservation159">
              <Translate contentKey="App.table10.statutDeReservation159">Statut De Reservation 159</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutDeReservation159}</dd>
          <dt>
            <span id="circuitDistribution160">
              <Translate contentKey="App.table10.circuitDistribution160">Circuit Distribution 160</Translate>
            </span>
          </dt>
          <dd>{table10Entity.circuitDistribution160}</dd>
          <dt>
            <span id="circuitDistribUserRegroup161">
              <Translate contentKey="App.table10.circuitDistribUserRegroup161">Circuit Distrib User Regroup 161</Translate>
            </span>
          </dt>
          <dd>{table10Entity.circuitDistribUserRegroup161}</dd>
          <dt>
            <span id="numCrs162">
              <Translate contentKey="App.table10.numCrs162">Num Crs 162</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numCrs162}</dd>
          <dt>
            <span id="typeRefCrs163">
              <Translate contentKey="App.table10.typeRefCrs163">Type Ref Crs 163</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeRefCrs163}</dd>
          <dt>
            <span id="crsInsertDate164">
              <Translate contentKey="App.table10.crsInsertDate164">Crs Insert Date 164</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.crsInsertDate164 ? (
              <TextFormat value={table10Entity.crsInsertDate164} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateCreaResv165">
              <Translate contentKey="App.table10.dateCreaResv165">Date Crea Resv 165</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateCreaResv165 ? (
              <TextFormat value={table10Entity.dateCreaResv165} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="datePremier166">
              <Translate contentKey="App.table10.datePremier166">Date Premier 166</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.datePremier166 ? (
              <TextFormat value={table10Entity.datePremier166} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutPremier167">
              <Translate contentKey="App.table10.statutPremier167">Statut Premier 167</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutPremier167}</dd>
          <dt>
            <span id="dateDernier168">
              <Translate contentKey="App.table10.dateDernier168">Date Dernier 168</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateDernier168 ? (
              <TextFormat value={table10Entity.dateDernier168} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernier169">
              <Translate contentKey="App.table10.statutDernier169">Statut Dernier 169</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutDernier169}</dd>
          <dt>
            <span id="dateDernierPseudo170">
              <Translate contentKey="App.table10.dateDernierPseudo170">Date Dernier Pseudo 170</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateDernierPseudo170 ? (
              <TextFormat value={table10Entity.dateDernierPseudo170} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernierPseudo171">
              <Translate contentKey="App.table10.statutDernierPseudo171">Statut Dernier Pseudo 171</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutDernierPseudo171}</dd>
          <dt>
            <span id="diffDtCreaAnn172">
              <Translate contentKey="App.table10.diffDtCreaAnn172">Diff Dt Crea Ann 172</Translate>
            </span>
          </dt>
          <dd>{table10Entity.diffDtCreaAnn172}</dd>
          <dt>
            <span id="diffDtArrAnn173">
              <Translate contentKey="App.table10.diffDtArrAnn173">Diff Dt Arr Ann 173</Translate>
            </span>
          </dt>
          <dd>{table10Entity.diffDtArrAnn173}</dd>
          <dt>
            <span id="leadtime174">
              <Translate contentKey="App.table10.leadtime174">Leadtime 174</Translate>
            </span>
          </dt>
          <dd>{table10Entity.leadtime174}</dd>
          <dt>
            <span id="los175">
              <Translate contentKey="App.table10.los175">Los 175</Translate>
            </span>
          </dt>
          <dd>{table10Entity.los175}</dd>
          <dt>
            <span id="occupantsGroupe176">
              <Translate contentKey="App.table10.occupantsGroupe176">Occupants Groupe 176</Translate>
            </span>
          </dt>
          <dd>{table10Entity.occupantsGroupe176}</dd>
          <dt>
            <span id="nbNuitee177">
              <Translate contentKey="App.table10.nbNuitee177">Nb Nuitee 177</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbNuitee177}</dd>
          <dt>
            <span id="nbNuiteeNnDed178">
              <Translate contentKey="App.table10.nbNuiteeNnDed178">Nb Nuitee Nn Ded 178</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbNuiteeNnDed178}</dd>
          <dt>
            <span id="nbResvAnn179">
              <Translate contentKey="App.table10.nbResvAnn179">Nb Resv Ann 179</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbResvAnn179}</dd>
          <dt>
            <span id="nbAdu180">
              <Translate contentKey="App.table10.nbAdu180">Nb Adu 180</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbAdu180}</dd>
          <dt>
            <span id="nbEnf181">
              <Translate contentKey="App.table10.nbEnf181">Nb Enf 181</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbEnf181}</dd>
          <dt>
            <span id="nbPersDayU182">
              <Translate contentKey="App.table10.nbPersDayU182">Nb Pers Day U 182</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersDayU182}</dd>
          <dt>
            <span id="nbPersArr183">
              <Translate contentKey="App.table10.nbPersArr183">Nb Pers Arr 183</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersArr183}</dd>
          <dt>
            <span id="nbPersDep184">
              <Translate contentKey="App.table10.nbPersDep184">Nb Pers Dep 184</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersDep184}</dd>
          <dt>
            <span id="nbPersAnn185">
              <Translate contentKey="App.table10.nbPersAnn185">Nb Pers Ann 185</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersAnn185}</dd>
          <dt>
            <span id="nbPersNoshow186">
              <Translate contentKey="App.table10.nbPersNoshow186">Nb Pers Noshow 186</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersNoshow186}</dd>
          <dt>
            <span id="nbChbDayU187">
              <Translate contentKey="App.table10.nbChbDayU187">Nb Chb Day U 187</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbDayU187}</dd>
          <dt>
            <span id="nbChbArr188">
              <Translate contentKey="App.table10.nbChbArr188">Nb Chb Arr 188</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbArr188}</dd>
          <dt>
            <span id="nbChbDep189">
              <Translate contentKey="App.table10.nbChbDep189">Nb Chb Dep 189</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbDep189}</dd>
          <dt>
            <span id="nbChbAnn190">
              <Translate contentKey="App.table10.nbChbAnn190">Nb Chb Ann 190</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbAnn190}</dd>
          <dt>
            <span id="nbChbNoshow191">
              <Translate contentKey="App.table10.nbChbNoshow191">Nb Chb Noshow 191</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbNoshow191}</dd>
          <dt>
            <span id="revenuNetChambre192">
              <Translate contentKey="App.table10.revenuNetChambre192">Revenu Net Chambre 192</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetChambre192}</dd>
          <dt>
            <span id="revenuTaxeChambre193">
              <Translate contentKey="App.table10.revenuTaxeChambre193">Revenu Taxe Chambre 193</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeChambre193}</dd>
          <dt>
            <span id="revenuNetChambreGlobal194">
              <Translate contentKey="App.table10.revenuNetChambreGlobal194">Revenu Net Chambre Global 194</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetChambreGlobal194}</dd>
          <dt>
            <span id="revenuTaxeChambreGlobal195">
              <Translate contentKey="App.table10.revenuTaxeChambreGlobal195">Revenu Taxe Chambre Global 195</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeChambreGlobal195}</dd>
          <dt>
            <span id="revenuNetBq196">
              <Translate contentKey="App.table10.revenuNetBq196">Revenu Net Bq 196</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetBq196}</dd>
          <dt>
            <span id="revenuTaxeBq197">
              <Translate contentKey="App.table10.revenuTaxeBq197">Revenu Taxe Bq 197</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeBq197}</dd>
          <dt>
            <span id="revenuNetBqGlobal198">
              <Translate contentKey="App.table10.revenuNetBqGlobal198">Revenu Net Bq Global 198</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetBqGlobal198}</dd>
          <dt>
            <span id="revenuTaxeBqGlobal199">
              <Translate contentKey="App.table10.revenuTaxeBqGlobal199">Revenu Taxe Bq Global 199</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeBqGlobal199}</dd>
          <dt>
            <span id="revenuNetExtra200">
              <Translate contentKey="App.table10.revenuNetExtra200">Revenu Net Extra 200</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetExtra200}</dd>
          <dt>
            <span id="revenuTaxeExtra201">
              <Translate contentKey="App.table10.revenuTaxeExtra201">Revenu Taxe Extra 201</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeExtra201}</dd>
          <dt>
            <span id="revenuNetExtraGlobal202">
              <Translate contentKey="App.table10.revenuNetExtraGlobal202">Revenu Net Extra Global 202</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetExtraGlobal202}</dd>
          <dt>
            <span id="revenuTaxeExtraGlobal203">
              <Translate contentKey="App.table10.revenuTaxeExtraGlobal203">Revenu Taxe Extra Global 203</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeExtraGlobal203}</dd>
          <dt>
            <span id="revenuNetTotal204">
              <Translate contentKey="App.table10.revenuNetTotal204">Revenu Net Total 204</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetTotal204}</dd>
          <dt>
            <span id="revenuTaxeTotal205">
              <Translate contentKey="App.table10.revenuTaxeTotal205">Revenu Taxe Total 205</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeTotal205}</dd>
          <dt>
            <span id="revenuNetTotalGlobal206">
              <Translate contentKey="App.table10.revenuNetTotalGlobal206">Revenu Net Total Global 206</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetTotalGlobal206}</dd>
          <dt>
            <span id="revenuTaxeTotalGlobal207">
              <Translate contentKey="App.table10.revenuTaxeTotalGlobal207">Revenu Taxe Total Global 207</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeTotalGlobal207}</dd>
          <dt>
            <span id="prodRevenuChambre208">
              <Translate contentKey="App.table10.prodRevenuChambre208">Prod Revenu Chambre 208</Translate>
            </span>
          </dt>
          <dd>{table10Entity.prodRevenuChambre208}</dd>
          <dt>
            <span id="prodRevenuBq209">
              <Translate contentKey="App.table10.prodRevenuBq209">Prod Revenu Bq 209</Translate>
            </span>
          </dt>
          <dd>{table10Entity.prodRevenuBq209}</dd>
          <dt>
            <span id="prodRevenuExtra210">
              <Translate contentKey="App.table10.prodRevenuExtra210">Prod Revenu Extra 210</Translate>
            </span>
          </dt>
          <dd>{table10Entity.prodRevenuExtra210}</dd>
          <dt>
            <span id="prodRevenuTotal211">
              <Translate contentKey="App.table10.prodRevenuTotal211">Prod Revenu Total 211</Translate>
            </span>
          </dt>
          <dd>{table10Entity.prodRevenuTotal211}</dd>
          <dt>
            <span id="prodChambreNbNuitees212">
              <Translate contentKey="App.table10.prodChambreNbNuitees212">Prod Chambre Nb Nuitees 212</Translate>
            </span>
          </dt>
          <dd>{table10Entity.prodChambreNbNuitees212}</dd>
          <dt>
            <span id="techCreateDate213">
              <Translate contentKey="App.table10.techCreateDate213">Tech Create Date 213</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.techCreateDate213 ? (
              <TextFormat value={table10Entity.techCreateDate213} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdateDate214">
              <Translate contentKey="App.table10.techUpdateDate214">Tech Update Date 214</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.techUpdateDate214 ? (
              <TextFormat value={table10Entity.techUpdateDate214} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="numLigne215">
              <Translate contentKey="App.table10.numLigne215">Num Ligne 215</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numLigne215}</dd>
          <dt>
            <span id="resort216">
              <Translate contentKey="App.table10.resort216">Resort 216</Translate>
            </span>
          </dt>
          <dd>{table10Entity.resort216}</dd>
          <dt>
            <span id="resvNameId217">
              <Translate contentKey="App.table10.resvNameId217">Resv Name Id 217</Translate>
            </span>
          </dt>
          <dd>{table10Entity.resvNameId217}</dd>
          <dt>
            <span id="clientOId218">
              <Translate contentKey="App.table10.clientOId218">Client O Id 218</Translate>
            </span>
          </dt>
          <dd>{table10Entity.clientOId218}</dd>
          <dt>
            <span id="typeChb219">
              <Translate contentKey="App.table10.typeChb219">Type Chb 219</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeChb219}</dd>
          <dt>
            <span id="confirmationNo220">
              <Translate contentKey="App.table10.confirmationNo220">Confirmation No 220</Translate>
            </span>
          </dt>
          <dd>{table10Entity.confirmationNo220}</dd>
          <dt>
            <span id="clientMdmId221">
              <Translate contentKey="App.table10.clientMdmId221">Client Mdm Id 221</Translate>
            </span>
          </dt>
          <dd>{table10Entity.clientMdmId221}</dd>
          <dt>
            <span id="nameId222">
              <Translate contentKey="App.table10.nameId222">Name Id 222</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nameId222}</dd>
          <dt>
            <span id="parentResvNameId223">
              <Translate contentKey="App.table10.parentResvNameId223">Parent Resv Name Id 223</Translate>
            </span>
          </dt>
          <dd>{table10Entity.parentResvNameId223}</dd>
          <dt>
            <span id="contactId224">
              <Translate contentKey="App.table10.contactId224">Contact Id 224</Translate>
            </span>
          </dt>
          <dd>{table10Entity.contactId224}</dd>
          <dt>
            <span id="agenceId225">
              <Translate contentKey="App.table10.agenceId225">Agence Id 225</Translate>
            </span>
          </dt>
          <dd>{table10Entity.agenceId225}</dd>
          <dt>
            <span id="agenceNom226">
              <Translate contentKey="App.table10.agenceNom226">Agence Nom 226</Translate>
            </span>
          </dt>
          <dd>{table10Entity.agenceNom226}</dd>
          <dt>
            <span id="societeId227">
              <Translate contentKey="App.table10.societeId227">Societe Id 227</Translate>
            </span>
          </dt>
          <dd>{table10Entity.societeId227}</dd>
          <dt>
            <span id="groupeId228">
              <Translate contentKey="App.table10.groupeId228">Groupe Id 228</Translate>
            </span>
          </dt>
          <dd>{table10Entity.groupeId228}</dd>
          <dt>
            <span id="numBloc229">
              <Translate contentKey="App.table10.numBloc229">Num Bloc 229</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numBloc229}</dd>
          <dt>
            <span id="typeResv230">
              <Translate contentKey="App.table10.typeResv230">Type Resv 230</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeResv230}</dd>
          <dt>
            <span id="statutResv231">
              <Translate contentKey="App.table10.statutResv231">Statut Resv 231</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutResv231}</dd>
          <dt>
            <span id="dateDebutResv232">
              <Translate contentKey="App.table10.dateDebutResv232">Date Debut Resv 232</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateDebutResv232 ? (
              <TextFormat value={table10Entity.dateDebutResv232} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateFinResv233">
              <Translate contentKey="App.table10.dateFinResv233">Date Fin Resv 233</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateFinResv233 ? (
              <TextFormat value={table10Entity.dateFinResv233} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateDebutResv234">
              <Translate contentKey="App.table10.truncDateDebutResv234">Trunc Date Debut Resv 234</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.truncDateDebutResv234 ? (
              <TextFormat value={table10Entity.truncDateDebutResv234} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="truncDateFinResv235">
              <Translate contentKey="App.table10.truncDateFinResv235">Trunc Date Fin Resv 235</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.truncDateFinResv235 ? (
              <TextFormat value={table10Entity.truncDateFinResv235} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateAnnResv236">
              <Translate contentKey="App.table10.dateAnnResv236">Date Ann Resv 236</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateAnnResv236 ? (
              <TextFormat value={table10Entity.dateAnnResv236} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="pseudoRoomYn237">
              <Translate contentKey="App.table10.pseudoRoomYn237">Pseudo Room Yn 237</Translate>
            </span>
          </dt>
          <dd>{table10Entity.pseudoRoomYn237}</dd>
          <dt>
            <span id="createurResv238">
              <Translate contentKey="App.table10.createurResv238">Createur Resv 238</Translate>
            </span>
          </dt>
          <dd>{table10Entity.createurResv238}</dd>
          <dt>
            <span id="nomCreateurResv239">
              <Translate contentKey="App.table10.nomCreateurResv239">Nom Createur Resv 239</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nomCreateurResv239}</dd>
          <dt>
            <span id="codeGarantie240">
              <Translate contentKey="App.table10.codeGarantie240">Code Garantie 240</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeGarantie240}</dd>
          <dt>
            <span id="flgDed241">
              <Translate contentKey="App.table10.flgDed241">Flg Ded 241</Translate>
            </span>
          </dt>
          <dd>{table10Entity.flgDed241}</dd>
          <dt>
            <span id="codePays242">
              <Translate contentKey="App.table10.codePays242">Code Pays 242</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codePays242}</dd>
          <dt>
            <span id="libPays243">
              <Translate contentKey="App.table10.libPays243">Lib Pays 243</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libPays243}</dd>
          <dt>
            <span id="codeNationalite244">
              <Translate contentKey="App.table10.codeNationalite244">Code Nationalite 244</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeNationalite244}</dd>
          <dt>
            <span id="libNationalite245">
              <Translate contentKey="App.table10.libNationalite245">Lib Nationalite 245</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libNationalite245}</dd>
          <dt>
            <span id="codeSource246">
              <Translate contentKey="App.table10.codeSource246">Code Source 246</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeSource246}</dd>
          <dt>
            <span id="libSource247">
              <Translate contentKey="App.table10.libSource247">Lib Source 247</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libSource247}</dd>
          <dt>
            <span id="codeGrandSource248">
              <Translate contentKey="App.table10.codeGrandSource248">Code Grand Source 248</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeGrandSource248}</dd>
          <dt>
            <span id="codeOrigine249">
              <Translate contentKey="App.table10.codeOrigine249">Code Origine 249</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeOrigine249}</dd>
          <dt>
            <span id="libOrigine250">
              <Translate contentKey="App.table10.libOrigine250">Lib Origine 250</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libOrigine250}</dd>
          <dt>
            <span id="codeMarche251">
              <Translate contentKey="App.table10.codeMarche251">Code Marche 251</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeMarche251}</dd>
          <dt>
            <span id="libMarche252">
              <Translate contentKey="App.table10.libMarche252">Lib Marche 252</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libMarche252}</dd>
          <dt>
            <span id="codeGrandMarche253">
              <Translate contentKey="App.table10.codeGrandMarche253">Code Grand Marche 253</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeGrandMarche253}</dd>
          <dt>
            <span id="libGrandMarche254">
              <Translate contentKey="App.table10.libGrandMarche254">Lib Grand Marche 254</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libGrandMarche254}</dd>
          <dt>
            <span id="codePrix255">
              <Translate contentKey="App.table10.codePrix255">Code Prix 255</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codePrix255}</dd>
          <dt>
            <span id="categPrix256">
              <Translate contentKey="App.table10.categPrix256">Categ Prix 256</Translate>
            </span>
          </dt>
          <dd>{table10Entity.categPrix256}</dd>
          <dt>
            <span id="libPrix257">
              <Translate contentKey="App.table10.libPrix257">Lib Prix 257</Translate>
            </span>
          </dt>
          <dd>{table10Entity.libPrix257}</dd>
          <dt>
            <span id="numChb258">
              <Translate contentKey="App.table10.numChb258">Num Chb 258</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numChb258}</dd>
          <dt>
            <span id="descriptionTypeChb259">
              <Translate contentKey="App.table10.descriptionTypeChb259">Description Type Chb 259</Translate>
            </span>
          </dt>
          <dd>{table10Entity.descriptionTypeChb259}</dd>
          <dt>
            <span id="codeTypeChb260">
              <Translate contentKey="App.table10.codeTypeChb260">Code Type Chb 260</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeTypeChb260}</dd>
          <dt>
            <span id="classChb261">
              <Translate contentKey="App.table10.classChb261">Class Chb 261</Translate>
            </span>
          </dt>
          <dd>{table10Entity.classChb261}</dd>
          <dt>
            <span id="caractChb262">
              <Translate contentKey="App.table10.caractChb262">Caract Chb 262</Translate>
            </span>
          </dt>
          <dd>{table10Entity.caractChb262}</dd>
          <dt>
            <span id="typeChbDeReservation263">
              <Translate contentKey="App.table10.typeChbDeReservation263">Type Chb De Reservation 263</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeChbDeReservation263}</dd>
          <dt>
            <span id="descriptionTypeChbDeResv264">
              <Translate contentKey="App.table10.descriptionTypeChbDeResv264">Description Type Chb De Resv 264</Translate>
            </span>
          </dt>
          <dd>{table10Entity.descriptionTypeChbDeResv264}</dd>
          <dt>
            <span id="codeTypeChbDeResv265">
              <Translate contentKey="App.table10.codeTypeChbDeResv265">Code Type Chb De Resv 265</Translate>
            </span>
          </dt>
          <dd>{table10Entity.codeTypeChbDeResv265}</dd>
          <dt>
            <span id="statutDeReservation266">
              <Translate contentKey="App.table10.statutDeReservation266">Statut De Reservation 266</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutDeReservation266}</dd>
          <dt>
            <span id="circuitDistribution267">
              <Translate contentKey="App.table10.circuitDistribution267">Circuit Distribution 267</Translate>
            </span>
          </dt>
          <dd>{table10Entity.circuitDistribution267}</dd>
          <dt>
            <span id="circuitDistribUserRegroup268">
              <Translate contentKey="App.table10.circuitDistribUserRegroup268">Circuit Distrib User Regroup 268</Translate>
            </span>
          </dt>
          <dd>{table10Entity.circuitDistribUserRegroup268}</dd>
          <dt>
            <span id="numCrs269">
              <Translate contentKey="App.table10.numCrs269">Num Crs 269</Translate>
            </span>
          </dt>
          <dd>{table10Entity.numCrs269}</dd>
          <dt>
            <span id="typeRefCrs270">
              <Translate contentKey="App.table10.typeRefCrs270">Type Ref Crs 270</Translate>
            </span>
          </dt>
          <dd>{table10Entity.typeRefCrs270}</dd>
          <dt>
            <span id="crsInsertDate271">
              <Translate contentKey="App.table10.crsInsertDate271">Crs Insert Date 271</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.crsInsertDate271 ? (
              <TextFormat value={table10Entity.crsInsertDate271} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateCreaResv272">
              <Translate contentKey="App.table10.dateCreaResv272">Date Crea Resv 272</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateCreaResv272 ? (
              <TextFormat value={table10Entity.dateCreaResv272} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="datePremier273">
              <Translate contentKey="App.table10.datePremier273">Date Premier 273</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.datePremier273 ? (
              <TextFormat value={table10Entity.datePremier273} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutPremier274">
              <Translate contentKey="App.table10.statutPremier274">Statut Premier 274</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutPremier274}</dd>
          <dt>
            <span id="dateDernier275">
              <Translate contentKey="App.table10.dateDernier275">Date Dernier 275</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateDernier275 ? (
              <TextFormat value={table10Entity.dateDernier275} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernier276">
              <Translate contentKey="App.table10.statutDernier276">Statut Dernier 276</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutDernier276}</dd>
          <dt>
            <span id="dateDernierPseudo277">
              <Translate contentKey="App.table10.dateDernierPseudo277">Date Dernier Pseudo 277</Translate>
            </span>
          </dt>
          <dd>
            {table10Entity.dateDernierPseudo277 ? (
              <TextFormat value={table10Entity.dateDernierPseudo277} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statutDernierPseudo278">
              <Translate contentKey="App.table10.statutDernierPseudo278">Statut Dernier Pseudo 278</Translate>
            </span>
          </dt>
          <dd>{table10Entity.statutDernierPseudo278}</dd>
          <dt>
            <span id="diffDtCreaAnn279">
              <Translate contentKey="App.table10.diffDtCreaAnn279">Diff Dt Crea Ann 279</Translate>
            </span>
          </dt>
          <dd>{table10Entity.diffDtCreaAnn279}</dd>
          <dt>
            <span id="diffDtArrAnn280">
              <Translate contentKey="App.table10.diffDtArrAnn280">Diff Dt Arr Ann 280</Translate>
            </span>
          </dt>
          <dd>{table10Entity.diffDtArrAnn280}</dd>
          <dt>
            <span id="leadtime281">
              <Translate contentKey="App.table10.leadtime281">Leadtime 281</Translate>
            </span>
          </dt>
          <dd>{table10Entity.leadtime281}</dd>
          <dt>
            <span id="los282">
              <Translate contentKey="App.table10.los282">Los 282</Translate>
            </span>
          </dt>
          <dd>{table10Entity.los282}</dd>
          <dt>
            <span id="occupantsGroupe283">
              <Translate contentKey="App.table10.occupantsGroupe283">Occupants Groupe 283</Translate>
            </span>
          </dt>
          <dd>{table10Entity.occupantsGroupe283}</dd>
          <dt>
            <span id="nbNuitee284">
              <Translate contentKey="App.table10.nbNuitee284">Nb Nuitee 284</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbNuitee284}</dd>
          <dt>
            <span id="nbNuiteeNnDed285">
              <Translate contentKey="App.table10.nbNuiteeNnDed285">Nb Nuitee Nn Ded 285</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbNuiteeNnDed285}</dd>
          <dt>
            <span id="nbResvAnn286">
              <Translate contentKey="App.table10.nbResvAnn286">Nb Resv Ann 286</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbResvAnn286}</dd>
          <dt>
            <span id="nbAdu287">
              <Translate contentKey="App.table10.nbAdu287">Nb Adu 287</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbAdu287}</dd>
          <dt>
            <span id="nbEnf288">
              <Translate contentKey="App.table10.nbEnf288">Nb Enf 288</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbEnf288}</dd>
          <dt>
            <span id="nbPersDayU289">
              <Translate contentKey="App.table10.nbPersDayU289">Nb Pers Day U 289</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersDayU289}</dd>
          <dt>
            <span id="nbPersArr290">
              <Translate contentKey="App.table10.nbPersArr290">Nb Pers Arr 290</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersArr290}</dd>
          <dt>
            <span id="nbPersDep291">
              <Translate contentKey="App.table10.nbPersDep291">Nb Pers Dep 291</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersDep291}</dd>
          <dt>
            <span id="nbPersAnn292">
              <Translate contentKey="App.table10.nbPersAnn292">Nb Pers Ann 292</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersAnn292}</dd>
          <dt>
            <span id="nbPersNoshow293">
              <Translate contentKey="App.table10.nbPersNoshow293">Nb Pers Noshow 293</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbPersNoshow293}</dd>
          <dt>
            <span id="nbChbDayU294">
              <Translate contentKey="App.table10.nbChbDayU294">Nb Chb Day U 294</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbDayU294}</dd>
          <dt>
            <span id="nbChbArr295">
              <Translate contentKey="App.table10.nbChbArr295">Nb Chb Arr 295</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbArr295}</dd>
          <dt>
            <span id="nbChbDep296">
              <Translate contentKey="App.table10.nbChbDep296">Nb Chb Dep 296</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbDep296}</dd>
          <dt>
            <span id="nbChbAnn297">
              <Translate contentKey="App.table10.nbChbAnn297">Nb Chb Ann 297</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbAnn297}</dd>
          <dt>
            <span id="nbChbNoshow298">
              <Translate contentKey="App.table10.nbChbNoshow298">Nb Chb Noshow 298</Translate>
            </span>
          </dt>
          <dd>{table10Entity.nbChbNoshow298}</dd>
          <dt>
            <span id="revenuNetChambre299">
              <Translate contentKey="App.table10.revenuNetChambre299">Revenu Net Chambre 299</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetChambre299}</dd>
          <dt>
            <span id="revenuTaxeChambre300">
              <Translate contentKey="App.table10.revenuTaxeChambre300">Revenu Taxe Chambre 300</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeChambre300}</dd>
          <dt>
            <span id="revenuNetChambreGlobal301">
              <Translate contentKey="App.table10.revenuNetChambreGlobal301">Revenu Net Chambre Global 301</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetChambreGlobal301}</dd>
          <dt>
            <span id="revenuTaxeChambreGlobal302">
              <Translate contentKey="App.table10.revenuTaxeChambreGlobal302">Revenu Taxe Chambre Global 302</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeChambreGlobal302}</dd>
          <dt>
            <span id="revenuNetBq303">
              <Translate contentKey="App.table10.revenuNetBq303">Revenu Net Bq 303</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetBq303}</dd>
          <dt>
            <span id="revenuTaxeBq304">
              <Translate contentKey="App.table10.revenuTaxeBq304">Revenu Taxe Bq 304</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeBq304}</dd>
          <dt>
            <span id="revenuNetBqGlobal305">
              <Translate contentKey="App.table10.revenuNetBqGlobal305">Revenu Net Bq Global 305</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetBqGlobal305}</dd>
          <dt>
            <span id="revenuTaxeBqGlobal306">
              <Translate contentKey="App.table10.revenuTaxeBqGlobal306">Revenu Taxe Bq Global 306</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeBqGlobal306}</dd>
          <dt>
            <span id="revenuNetExtra307">
              <Translate contentKey="App.table10.revenuNetExtra307">Revenu Net Extra 307</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetExtra307}</dd>
          <dt>
            <span id="revenuTaxeExtra308">
              <Translate contentKey="App.table10.revenuTaxeExtra308">Revenu Taxe Extra 308</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeExtra308}</dd>
          <dt>
            <span id="revenuNetExtraGlobal309">
              <Translate contentKey="App.table10.revenuNetExtraGlobal309">Revenu Net Extra Global 309</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuNetExtraGlobal309}</dd>
          <dt>
            <span id="revenuTaxeExtraGlobal310">
              <Translate contentKey="App.table10.revenuTaxeExtraGlobal310">Revenu Taxe Extra Global 310</Translate>
            </span>
          </dt>
          <dd>{table10Entity.revenuTaxeExtraGlobal310}</dd>
        </dl>
        <Button tag={Link} to="/table-10" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/table-10/${table10Entity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default Table10Detail;
