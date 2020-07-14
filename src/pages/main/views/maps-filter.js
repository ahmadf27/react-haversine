import React from 'react'
import classnames from 'classnames'
import { Dropdown, SideBar, Button } from 'libs'

const MapsFilter = (props) => {
    const {
        handleChangeSchool,
        handleFilter,
        handleFindMyLocation,
        handleResetFilter,
        isLoading,
        resultMessage,
        schoolList,
        schoolValue
    } = props

    const buttonClass = classnames('is-fullwidth', isLoading && 'is-loading')
    const textFindLocation = classnames(
        'text-location is-size-7',
        isLoading ? 'has-text-danger' : 'has-text-success	',
        !isLoading && 'has-text-weight-bold'
    )

    return (
        <SideBar>
            <label className='label'>Titik awal</label>
            <Button className={buttonClass} onClick={handleFindMyLocation}>
                Lokasi Anda
            </Button>
            <p className={textFindLocation}>
                {isLoading ? 'Sedang mencari lokasi...' : '√ Lokasi ditemukan'}
            </p>

            <Dropdown
                label='Pilih Tujuan'
                objectValue={schoolList}
                placeholder='Pilih Tujuan'
                onChange={(e) => handleChangeSchool(e.target.value)}
                value={schoolValue}
            />

            <div className='columns is-margin-top-smaller'>
                <div className='column'>
                    <Button
                        className='is-fullwidth is-success'
                        onClick={handleFilter}
                    >
                        Cari
                    </Button>
                </div>
                <div className='column'>
                    <Button
                        className='is-fullwidth is-light is-danger'
                        onClick={handleResetFilter}
                    >
                        Reset
                    </Button>
                </div>
            </div>

            {resultMessage !== '' && (
                <p className='is-margin-top-smaller'>
                    Hasil: <br />
                    {isFinite ? parseInt(resultMessage).toFixed(2) : ''}
                </p>
            )}
        </SideBar>
    )
}

export default MapsFilter
